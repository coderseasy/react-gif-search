import { useState } from "react";
import Add from "./components/Add";
import Gift from "./components/Gift";

const App=()=> {
    const [categories, setCategories] = useState(['sword art online']);

    return (
        <div className="container-fluid py-5">
            <div className="card mb-3">
                <div className="card-header text-center">
                    GIFT SEARCH APP
                </div>
            </div>
            <div className="card">
                <div className="card-header bg-info">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <Add setCategories={setCategories} />
                        </div>
                        <div className="col-4"></div>
                        <div className="col-4"></div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row px-3">
                        {
                            categories.map( (category) => (
                                <Gift
                                    key={ category }
                                    category={ category }
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default App;