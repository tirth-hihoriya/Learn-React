import './App.css';
import { useState } from "react";
import { useEffect} from "react";

function App() {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/nanotaboada/6396437/raw/855dd84436be2c86e192abae2ac605743fc3a127/books.json")
            .then((res) => res.json())
            .then((d) => { setData(d.books) })

            // console.log("---inside useEffect----")
            // console.log(data[0])
    }, [data]);

    // console.log("$$$$$$")
    // console.log(data[0])
    
    return (

        <div className="App">

            <table>
                <tr>
                    <th>ISBN</th>
                    <th>Title</th>
                    <th>Subtitle</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Website</th>
                </tr>
                {data?.map((d, key) => {
                    return (

                        <tr key={key}>
                            <td>{d?.isbn}</td>
                            <td>{d?.title}</td>
                            <td>{d?.subtitle}</td>
                            <td>{d?.author}</td>
                            <td>{d?.pages}</td>
                            <td>{d?.website}</td>
                        </tr>
                    )
                })}
            </table>

        </div>
    );
}

export default App;
