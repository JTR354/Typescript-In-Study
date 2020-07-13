/**
 * guards类型保护
 */
//  void function () {
//   class Java {
//     java(){}
//   }
//   class JS {
//       js(){}
//   }
//   let lang = new JS
//   function getLang(type: string) {
//       let lang = type === 'stong' ? new Java : new JS
//       if (lang as Java) {
//         console.log(lang);
//       }
//   }
//   getLang('stong2')
//  }()

 enum Type {
   Strong,
   Week
 }

 class Java {
   helloJava() {
     console.log('Hello Java' + this.java);
   }
   java: any
 }

 class JavaScript {
   helloJavScript() {
      this.js = []
      this.js = '123'
      this.js = 666
      this.js = undefined
     console.log('Hello JavaScirpt');
   }
   js:any
 }

 function isJava(lang:Java |JavaScript): lang is Java {
   return (lang as Java).helloJava !== undefined
 }

 function getLanguage(type: Type, x:string | number) {
   let lang = type === Type.Strong ? new Java() : new JavaScript()
   if (isJava(lang)) {
    lang.helloJava()
   } else {
    lang.helloJavScript()
   }

   if(lang as Java) {
    console.log(lang, 'as java')
    // lang.helloJava()
   } else {
    console.log(lang, 'as js');
   }

   /* instanceof */
   if (lang instanceof JavaScript) {
     console.log(lang, 'instanceof js');
     
   } else {
     console.log(lang, 'instanceof java');
   }

   /* in  */
   if ('js' in lang) {
     console.log(lang, 'in js');
   } else {
     console.log(lang, 'in java');
   }

   /* typeof */
   if (typeof x === 'string') {
     console.log(x.length);
   } else {
     console.log(x.toFixed(2));
   }

   return lang
 }

//  getLanguage(Type.Week, '123')

 