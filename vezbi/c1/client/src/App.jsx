import { useState } from "react";
import axios from "axios";

function App() {

    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const askAI = async (e) => {
        e.preventDefault();

        setLoading(true);
        setAnswer("");

        try {

            const res = await axios.post(
                "http://localhost:3000/api/v1/ai/chat", { prompt: prompt }
            );
            setAnswer(res.data.answer);
            setPrompt("");

        } catch (err) {

            console.log(err);

            setAnswer(
                "Nastana greska pri komunikacija so AI."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <div
            style={{
                maxWidth: "800px",
                margin: "50px auto",
                padding: "20px"
            }}
        >

            <h1>AI Chat za Pocvhi</h1>

            <form onSubmit={askAI}>

                <input
                    type="text"
                    placeholder="Postavi prasanje..."
                    value={prompt}
                    onChange={(e) =>
                        setPrompt(e.target.value)
                    }
                    style={{
                        width: "70%",
                        padding: "10px",
                        marginRight: "10px"
                    }}
                />

                <button
                    type="submit"
                    disabled={loading}
                >
                    {loading
                        ? "Se ceka odgovor..."
                        : "Prasaj AI"}
                </button>

            </form>

            {loading && (
                <div
                    style={{
                        marginTop: "20px"
                    }}
                >
                    <p>AI razmisluva...</p>
                </div>
            )}

            {answer && (
                <div
                    style={{
                        marginTop: "20px",
                        border: "1px solid gray",
                        padding: "15px",
                        borderRadius: "8px"
                    }}
                >

                    <h3>AI Odgovor:</h3>

                    <p>{answer}</p>

                </div>
            )}

        </div>
    );
}

export default App;