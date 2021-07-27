class MyPromise {
   constructor(callback) {

      this.state = 'PENDING';
      this.value = undefined;
      this.handlers = [];

      try {
         callback(this._resolve, this._reject);
      } catch (err) {
         this._reject(err)
      }
   }

   _resolve = (value) => {
      this.updateResult(value, 'FULFILLED');
   }

   _reject = (error) => {
      this.updateResult(error, 'REJECTED');
   }

   updateResult(value, state) {
      setTimeout(() => {

         if (this.state !== 'PENDING') {
            return;
         }

         this.value = value;
         this.state = state;

         this.executeHandlers();
      }, 0);
   }

   then(onSuccess, onFail) {
      return new MyPromise((res, rej) => {
         this.addHandlers({
            onSuccess: function (value) {
               if (!onSuccess) {
                  return res(value);
               }
               try {
                  return res(onSuccess(value))
               } catch (err) {
                  return rej(err);
               }
            },
            onFail: function (value) {
               if (!onFail) {
                  return rej(value);
               }
               try {
                  return res(onFail(value))
               } catch (err) {
                  return rej(err);
               }
            }
         });
      });
   }

   catch(onFail) {
      return this.then(null, onFail);
   }

   finally(callback) {
      return new MyPromise((res, rej) => {
         let val;
         let wasRejected;
         this.then((value) => {
            wasRejected = false;
            val = value;
            return callback();
         }, (err) => {
            wasRejected = true;
            val = err;
            return callback();
         }).then(() => {
            if (!wasRejected) {
               return res(val);
            }
            return rej(val);
         })
      })
   }

   addHandlers(handlers) {
      this.handlers.push(handlers);
      this.executeHandlers();
   }

   executeHandlers() {
      if (this.state === 'PENDING') {
         return null;
      }

      this.handlers.forEach((handler) => {
         if (this.state === 'FULFILLED') {
            return handler.onSuccess(this.value);
         }
         return handler.onFail(this.value);
         //    .then(res => console.log(res))
      });
      this.handlers = [];
   }
}

let promise = new MyPromise((resolve, reject) => {
   setTimeout(() => resolve("Hello"), 2000)
   setTimeout(() => reject("Oppa"), 2500)
})
   .then(res => console.log(res))
   .catch(err => console.log(err))


console.log(promise)