import React,{Component} from 'react';
import styles from '../style/app'
class App extends Component{
    render(){
        return (
            <div id='container'>
                <header>{this.props.title}</header>
                <div>测试自动更新代码</div>
                <div>测试dev-Serverddd</div>

            </div>
        )
    }
}
export default App ;