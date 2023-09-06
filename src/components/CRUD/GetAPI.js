import axios from 'axios'
const { Component } = require("react");



class GetAPI extends Component {

    constructor() {
        super();

        this.state = {
            books: []
        }

    }

    componentDidMount() {
        axios.get('http://localhost:8081/api/books')
            .then((res) => {
                this.setState({
                    books: res.data
                }, () => {
                    console.log(this.state.books);
                })
            })

        //console.log(this.state.books);
    }



    render() {

        return (
            <>
                <table border='2'> 
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Book Name</th>
                            <th>Author</th>
                            <th>Price</th>
                            <th>Count</th>

                        </tr>
                    </thead>

                    <tbody >
                    {
                    this.state.books.map((book, index) =>{
                        return (
                            <tr key={index}>
                                <td>{book.bookId}</td>
                                <td>{book.bookName}</td>
                                <td>{book.author}</td>
                                <td>{book.price}</td>
                                <td>{book.count}</td>
                            </tr>
                        )
                    }
                        
                    )
                }
                    </tbody>

                </table>
            </>
        );
    }

}

export default GetAPI