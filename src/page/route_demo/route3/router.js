import React, { Component } from 'react'
import { HashRouter as Router, Route ,Switch} from 'react-router-dom';
import About from './About';
import A from './A';
import Main from './Main';
import Info from './Info';
import NoMatch from './NoMatch'

// new 获取参数id   /#/order/123    订单详情,order后面123是ID值
import Home from './Home';
// import { Switch } from 'antd';
export default class router extends Component {
    render() {
        return (
            <Router>
                <Home>
                    {/* main只有一层路由的时候 */}
                    {/* <Route exact={true} path="/" component={Main}></Route> */}
                    {/* main嵌套一个子路由 */}
                    {/* <Route exact={true} path="/" render={()=> */}
                    {/* 二级路由不能加exact */}
                    {/* 只有先进来,才能匹配到嵌套的子路由 */}


                    {/* 可以使用switch语法,一旦导入,找到一个,就不会再执行 */}
                    <Switch>

                        <Route path="/main" render={() => {
                            // 需要有返回值
                            return (
                                <Main>
                                    <Route exact path="/main/:mainId" component={Info}></Route>
                                </Main>
                            )
                        }
                        }></Route>

                        <Route exact path="/about" component={About}></Route>
                        <Route exact path="/a" component={A}></Route>
                        <Route component={NoMatch} />

                    </Switch>
                </Home>
            </Router>
        )
    }
}
