


exports.gettable = (req, res, next) =>{

const tableArr = [];
    //Table
    for(let i=1; i<=(req.body.value) ;i++){
        const result = (req.body.table) * i;
        tableArr.push(req.body.table + 'x' + i + ' = '+ result);
    }

    return res.status(200).send(tableArr)
}
