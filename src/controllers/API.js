const CRUD = {
    index :  model =>  model.findAll(),
    show : ( model , id ) => model.findOne({ where : { id }}),
    query : ( model , query ) => model.findAll({ where : query }),
    store : ( model, data ) => model.create( data ),
    update : ( model, data, id ) => model.update( data, { where : { id }} ),
    delete : ( model, id ) =>  model.destroy({ where: { id } })
}

const  resposta =  (res, funcao, model, params, id) => {
    funcao( model, params, id )
    .then( response => res.json(response))
    .catch( error => res.status(400).json(error))
}

export { CRUD , resposta }