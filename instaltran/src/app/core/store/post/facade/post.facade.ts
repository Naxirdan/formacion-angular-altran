import { Injectable } from "@angular/core";
import { PostsApi } from "src/app/core/api/posts.api"

@Injectable({
  providedIn: 'root'
})

export class PostFacade {

  constructor(private _postsApi: PostsApi) { }

  getPost$ = (id: number) => this._postsApi.getPost$(id)
  getListPosts$ = () => this._postsApi.getListPosts$()

}

/*
Tenemos más operadores rxjs como puede ser:
 -> filter: que nos permite filtrar el resultado para retornar solo lo que nos interesa
 -> concatMap: Crea un nuevo observable con los valores recibidos.
 -> mergeMap: Genera un observable por cada uno de los elementos.
 -> delay: Añade un retraso al inicio del flujo de datos
 -> take: Número máximo de iteraciones
 -> tap: Intercepta cada emisión en el comienzo del interacción devolviendo un observable identico al raíz

...

Source : https://rxjs-dev.firebaseapp.com/api/operators`
 */

