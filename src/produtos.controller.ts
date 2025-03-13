import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model"; // importei a model pra usar dentro da controller
import { ProdutosService } from "./produtos.service";

@Controller('produtos') //recebe a url
export class ProdutosController {

    constructor(private produtosService: ProdutosService) {

    }

    @Get()
    obterTodos(): Produto[] {
        return this.produtosService.obterTodos();
    }
    @Get(':id')
    obert1(@Param() params): Produto {
        return this.produtosService.obert1(params.id)
    }
    @Post()
    criar(@Body() produto: Produto) {
        produto.id = 404;
        this.produtosService.criar(produto);
        
    }
    @Put()
    alterar(@Body() produto: Produto): Produto {
        return this.produtosService.alterar(produto)
    }
    @Delete(':id')
    apagar(@Param() params) {
        this.produtosService.apagar(params.id);
    }
}