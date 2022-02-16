const queries = {};
queries.g_id1_avg_yearly_congestion = "SELECT * FROM g_id1_avg_yearly_congestion;";
queries.g_id2_daily_elspot_price = "SELECT * FROM g_id2_daily_elspot_price;";
queries.g_id3_hourly_euro_index = "SELECT * FROM g_id3_hourly_euro_index;";
queries.g_id4_avg_monthly_price_swe = "SELECT * FROM g_id4_avg_monthly_price_swe;";
queries.g_id5_hourly_price_gb = "SELECT * FROM g_id5_hourly_price_gb;";
queries.g_bid_offer_spread = "SELECT * FROM g_bid_offer_spread;";
queries.g_electricity_wholesale_prices = "SELECT * FROM g_electricity_wholesale_prices;";
queries.g_market_share = "SELECT * FROM g_market_share;";
queries.g_volatilty = "SELECT * FROM g_volatilty;";

queries.ex_market_news = "SELECT * FROM ex_market_news";
queries.ex_daily_values = "SELECT * FROM ex_daily_values";

queries.t_optionlist="SELECT * FROM t_optionlist;";
queries.t_optionlist_1="SELECT * FROM t_optionlist where exchange=? and OptType=? ";
queries.t_holdings="SELECT * FROM t_holdings;";

//queries for updating order history and holdings
queries.ins_t_userorders = "INSERT INTO t_userorders (orderId, orderDateTime, orderType, orderStatus, userId, sellerId, itemId,"
                            + "itemType, itemQty, totalPrice, isModifiable) VALUES (?,?,?,?,?,?,?,?,?,?,?);"

queries.sel_t_userholdings = "SELECT * FROM t_userholdings where userId = ? and  itemId = ?;"   

queries.ins_t_userholdings = "INSERT INTO t_userholdings (userId, itemId, itemType, itemsHeld, "+
                             "itemsTotalInvestedAmt, itemAvgInvestedAmt, remarks) VALUES (?,?,?,?,?,?,?);"        
    
queries.upd_t_userholdings = "UPDATE t_userholdings SET itemsHeld=?, itemsTotalInvestedAmt=?,"+
                             "itemAvgInvestedAmt=?, remarks=? WHERE itemId=?;";

module.exports = queries;