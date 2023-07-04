import app from "./app";

function main()  {
    try{ 
        app.listen(3000, 'localhost', async () => {
            console.log ('iniciando o servidor na porta 3000')
        })
    }catch (err) {
        console.error('starting server error', err)
    }
}

main()
