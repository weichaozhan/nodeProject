import GraModel from '../../models/graphqlTest';

class GraphqlTest {
    add(req, res, next) {
        const task = new GraModel();

        task.id = Date.now().toString();
        task.name = req.body.name;

        task.save((err) => {
            if (err) throw err;
            const resData = {
                total: 0,
            }

            GraModel.count({}, function(err, data){
                if (err) console.log(err);
                resData.total = data;
                res.end(JSON.stringify(resData));
            });
        });
    }
};

export default new GraphqlTest();