const React = require('react')


class Index extends React.Component {
    render() {
        
        const {todoList} = this.props
    
        return (
            <body> 
                <h1>to do list</h1>
                <h3>{todoList === undefined ? "There are no to-dos!" : todoList}</h3>
                    <ul>
                       { todoList.map((item, i) => {
                           
                           return (
                               <li>
                                   {item.objective} - {item.completed ? "DONE" : "NOT DONE"}
                                   <form 
                                    action={`/${item._id}?_method=DELETE`} method="post">
                                    <input type="submit" value="delete"/>
                                    </form>
                               </li>
                           )
                       })} 
                        
                    </ul>
                    <hr/>
                <form action="/" method="POST">
                    <input type="text" name="objective"/><br/>
                    has this been done? <input type="checkbox" name="completed"/><br/>
                    <input type="submit" value="ADD TO DO"/>
                </form>
            </body>
        )
    }
}

module.exports = Index;