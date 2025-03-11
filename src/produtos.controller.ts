import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('produtos') //recebe a url
export class ProdutosController {
    @Get()
    obterTodos(): string {
        return "obter todos os produtos";
    }
    @Get(':id')
    obert1(@Param() params): string {
        return `Retorna os dados do produto ${params.id}`
    }
    @Post()
    criar(@Body() produto): string {
        console.log(produto)
        return 'Produto criado'
    }
    @Put()
    alterar(): string {
        return 'Produto alterado com sucesso'
    }
    @Delete(':id')
    apagar(@Param() params): string {
        return `Produto ${params.id} apagado com sucesso`
    }
}