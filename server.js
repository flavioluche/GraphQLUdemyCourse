const express = require('express');
const expressGraphQL = require('express-graphql');
const schema =  require('./schema/schema')

const app = express();

app.use('/graphql', expressGraphQL({
    //ferramenta que permite fazer queries no servidor de desenvolvimento
    schema,
    graphiql: true 
}))


app.listen(4000, () => {
    console.log('Listening UdGraphQL');
})
