const express = require('express');
const bp = require('body-parser');
var async = require('async');
var config = require('../conf');
var r_main = require('./routes/r_main.js');
var r_misc = require('./routes/r_misc.js');
var r_option = require('./routes/r_option.js');
var r_option_list = require('./routes/r_option_list.js');
var r_order_summary = require('./routes/r_order_summary.js');
var r_order_history = require('./routes/r_order_history.js');
var r_payment = require('./routes/r_payment.js');
var r_transaction = require('./routes/r_transaction.js');
var r_options_sell_put = require('./routes/r_options_sell_put.js');
var r_sell_put_table = require('./routes/r_sell_put_table.js');
var r_order_summary_sell_put = require('./routes/r_order_summary_sell_put.js');
var r_transaction_sell_put = require('./routes/r_transaction_sell_put.js');
var r_order_history_sell_put = require('./routes/r_order_history_sell_put.js');
var r_trader1 = require('./routes/r_trader1.js');
var r_trader2 = require('./routes/r_trader2.js');
var r_trader3 = require('./routes/r_trader3.js');
var r_domestic = require('./routes/r_domestic.js');
var r_industrial = require('./routes/r_industrial.js');
var r_fuel_oil = require('./routes/r_fuel_oil.js');
var r_logistic = require('./routes/r_logistic.js');
var r_engineering_suppliers = require('./routes/r_engineering_suppliers.js');
var r_login = require('./routes/r_login.js');
var r_graphs = require('./routes/r_graphs.js');
var r_short_term = require('./routes/r_short_term.js');
var r_forecast = require('./routes/r_forecast.js');
var r_exchange = require('./routes/r_exchange.js');
var r_short_transaction = require('./routes/r_short_transaction.js');
var r_payment_short_term = require('./routes/r_payment_short_term.js');
var r_dam_order_history_payed = require('./routes/r_dam_order_history_payed.js');
var r_receipt = require('./routes/r_receipt.js');
var r_risk_return = require('./routes/r_risk_return.js');
var r_market_mix = require('./routes/r_market_mix.js');
var r_dam_market = require('./routes/r_dam_market.js');
var r_dam_order_summery = require('./routes/r_dam_order_summery.js');
var r_dam_order_history = require('./routes/r_dam_order_history.js');
var r_upd_orders_holdings = require('./routes/r_upd_orders_holdings.js');
var r_current_data = require('./routes/r_current_data.js');


const app = express();
app.use(express.static(config.viewPath)); // ==== static content
app.set('views', config.viewPath);
app.set('view engine', 'ejs'); // ==== view engine == check more
app.use(bp.urlencoded({ extended: true })); // ====  middleware == check more
app.use(bp.json());

app.listen(config.httpListenPort, function() { // ==== listen
        console.log('listening on ' + config.httpListenPort);
    }) //--- listen and log

//main or index page ( root name = dss)
app.use('/', r_main);
app.use('/dss', r_main);
//login/register/registration_page
app.use('/registraion_page', r_login);
// for graphs
app.use('/graphs', r_graphs);
//for current data
app.use('/current_data', r_current_data);
//for options
app.use('/options', r_option);
//for option list
app.use('/option_list', r_option_list);
//for order summary
app.use('/order_summary', r_order_summary);
//for payment
app.use('/payment', r_payment);
//for transaction
app.use('/transaction', r_transaction);
//for order history
app.use('/order_history', r_order_history);
//for options_sell_put
app.use('/option_sell_put', r_options_sell_put);
//for options_sell_put
app.use('/sell_put_table', r_sell_put_table);
//for order_summary_sell_put
app.use('/order_summary_sell_put', r_order_summary_sell_put);
//for transaction_sell
app.use('/transaction_sell_put', r_transaction_sell_put);
//for order_history_sell_put
app.use('/order_history_sell_put', r_order_history_sell_put);
//for trader1
app.use('/category1', r_trader1);
//for trader2
app.use('/category2', r_trader2);
//for trader3
app.use('/category3', r_trader3);
//for domestic consumers
app.use('/domestic', r_domestic);
//for industrial consumers
app.use('/industrial',  r_industrial);
//for fuel oil suppliers
app.use('/fuel_oil', r_fuel_oil);
//for logistic suppliers
app.use('/logistic', r_logistic);
//for engineering suppliers
app.use('/engineering_suppliers', r_engineering_suppliers);
//for forecast through midlle navebar
app.use('/forecast', r_forecast);
//for forecast through main common navebar
app.use('/forecast1', r_forecast);
//for exchange
app.use('/exchange', r_exchange);
//for risk return
app.use('/risk_return', r_risk_return);
//for market mix
app.use('/market_mix', r_market_mix);
//for dam market 
app.use('/dam_market', r_dam_market);
//for short term
app.use('/short_term', r_short_term);
//for dam order summery
app.use('/dam_order_summery', r_dam_order_summery);
//for dam order history
app.use('/dam_order_history', r_dam_order_history);
//for transaction1
app.use('/short_transaction', r_short_transaction);
//for short term trading payment
app.use('/payment_short_term', r_payment_short_term);
//for order history payed
app.use('/payed_history', r_dam_order_history_payed);
//for receipt
app.use('/receipt', r_receipt);
//for updating orders and holdings table
app.use('/upd_orders_holdings', r_upd_orders_holdings);
//invalid url
app.get('*', function(req, res) {
    res.render('err_user.ejs', { errMsg: 'Nothing here!' });
});