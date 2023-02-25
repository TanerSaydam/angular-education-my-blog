import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class SwalService {

  constructor() { }


  toastSwal(){
    const Toast = Swal.mixin({
      toast: true,
       position: 'top-end',
       timer: 3000,
       timerProgressBar: true,
       showCancelButton: false,
       showConfirmButton: false,
     })
     Toast.fire('Something interesting happened', '', 'info')
  }

  callSwal(btnName: string, text: string, callBack: ()=> void){
    Swal.fire({
      confirmButtonText: btnName,
      text: text,
      showCancelButton: true,
      cancelButtonText: 'Vazgeç',
      cancelButtonColor: "red",
      icon: 'question',      
    }).then(res=>{
      if(res.isConfirmed){
        callBack();
      }
    })
  }
}
