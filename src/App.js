import "./App.css";
import { useState, useEffect } from "react";
import ModalU from "./components/ModalU";
const defaultTodos = {
  userId: 0,
  title: "",
  status: false,
  datatodos: [],
};
const endpoint = "https://jsonplaceholder.typicode.com/comments";
function App() {
  const [state, setState] = useState("");
  const [data, setData] = useState([]);
  const [items, setModal] = useState({
    isModalUpdate: false,
    isModalDaa: false,
    toggle: false,
  });

  //   const [todos, setTodo] = useState(defaultTodos);
  //   const [page, setPage] = useState(0);
  //   const [isLoading, setLoading] = useState(false);
  //   const [isError, setError] = useState(false);
  //   const [isRefresh, setRefresh] = useState(false);

  //   useEffect(() => {
  //     const getData = async () => {
  //       setLoading(true);
  //       try {
  //         const res = await fetch(`${endpoint}`);
  //         const result = await res.json();
  //         console.log(result);
  //         setTodo((current) => {
  //           return {
  //             ...result,
  //             datatodos: [...current.datatodos, result.datatodos],
  //             userId: result.userId,
  //             title: result.title,
  //             status: result.completed,
  //           };
  //         });

  //         if (!result.completed) {
  //           throw new Error("error");
  //         }
  //       } catch (error) {
  //         setError(true);
  //       }
  //       setLoading(false);
  //     };

  //     getData();
  //   }, []);

  useEffect(() => {
    fetch(`${endpoint}`)
      .then((response) => response.json())
      .then((data) => setData(data));
  });

  useEffect(() => {
    console.log("componentdidMount => ", defaultTodos);
  }, []);
  /*fungsi [] kosong = supaya useEffect dirender hanya satu kali sama kaya di class comp */

  useEffect(() => {
    if (state !== "") {
      console.log("...componentDidUpdate");
    }
  }, [state]);

  useEffect(() => {
    return () => {
      console.log("...componentWillUnmount");
    };
  }, []);

  function handleChangeName(e) {
    setState(e.target.value);
    console.log(state);
  }

  const setUpdateData = () => {
    setModal((currentStatus) => ({
      ...items,
      isModalUpdate: !currentStatus.isModalUpdate,
    }));
  };

  return (
    <div className="container">
      <ModalU show={items.isModalUpdate} />
      {items.toggle && <p>test</p>}
      {/* {isLoading && <p>Loading...</p>} */}
      <input value={state} onChange={handleChangeName} />
      <div className="d-flex flex-row">
        <div className="column">
          <ul>
            {data.map((el) => (
              <div
                key={el.id}
                style={{
                  border: "1px solid #f1f1f1",
                  padding: "1rem",
                  width: "50%",
                }}
                className="column"
              >
                <div style={{ float: "right" }}>
                  <button
                    style={{
                      background: "#2c9e54",
                      width: "70px",
                      height: "22px",
                      borderRadius: "4px",
                    }}
                    onClick={setUpdateData}
                  >
                    <p style={{ margin: "0", color: "white" }}>Edit</p>
                  </button>
                </div>

                <div className="column">
                  <p>{el.id}</p>
                  <p>{el.name}</p>
                  <p>{el.email}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
