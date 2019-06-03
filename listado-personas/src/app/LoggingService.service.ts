export class LoggingService {
    enviarMensajeConsola(params){
      for (let key in params) {
          console.log(params[key])
      }
    }
}
