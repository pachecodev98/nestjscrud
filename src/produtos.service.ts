import { Body, Get, Injectable, Param, Post } from "@nestjs/common";
import { Produto } from "./produto.model";

@Injectable()
export class ProdutosService {
    produtos: Produto[] = [
        new Produto("LIV01", "Livro 1", 10.00),
        new Produto("LIV02", "Livro 2", 20.00),
        new Produto("LIV03", "Livro 3", 30.00),
    ]

  
    obterTodos(): Produto[] {
        return this.produtos;
    }
    
    obert1(@Param() params): Produto {
        return this.produtos[params]
    }
    
    criar(@Body() produto: Produto) {
        produto.id = 404;
        this.produtos.push(produto);

    }
   
    alterar(@Body() produto: Produto): Produto {
        produto.nome = "Livro0001";
        produto.preco = 100.00;
        return produto
    }
    
    apagar(@Param() params) {
        this.produtos.pop();
    }
}