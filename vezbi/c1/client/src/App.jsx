import { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [pochvi, setPochvi] = useState([]);

    const [formData, setFormData] = useState({
        ime: "",
        tip: "",
        ph: "",
        humus: "",
        tekstura: "",
        boja: "",
        lokacija: "",
    });

    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");

    const getPochvi = async () => {
        try {

            const res = await axios.get(
                "http://localhost:3000/api/v1/pochva"
            );

            setPochvi(res.data.data);

        } catch (err) {
            console.log(err);
        }
    };

    const createPochva = async (e) => {
        e.preventDefault();

        try {

            await axios.post(
                "http://localhost:3000/api/v1/pochva",
                formData
            );

            setFormData({
                ime: "",
                tip: "",
                ph: "",
                humus: "",
                tekstura: "",
                boja: "",
                lokacija: "",
            });

            getPochvi();

        } catch (err) {
            console.log(err);
        }
    };

    const deletePochva = async (id) => {
        try {

            await axios.delete(
                `http://localhost:3000/api/v1/pochva/${id}`
            );

            getPochvi();

        } catch (err) {
            console.log(err);
        }
    };

    const askAI = async (e) => {
        e.preventDefault();

        try {

            const res = await axios.post(
                "http://localhost:3000/api/v1/ai/chat",
                {
                    prompt: prompt
                }
            );

            setAnswer(res.data.answer);
            setPrompt("");

        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    useEffect(() => {
        getPochvi();
    }, []);

    return (
        <div style={{ padding: "20px" }}>

            <h1>Pochvi CRUD + AI Chat</h1>

            <form
                onSubmit={createPochva}
                style={{ marginBottom: "30px" }}
            >

                <input
                    name="ime"
                    placeholder="Ime"
                    value={formData.ime}
                    onChange={handleChange}
                />

                <input
                    name="tip"
                    placeholder="Tip"
                    value={formData.tip}
                    onChange={handleChange}
                />

                <input
                    name="ph"
                    placeholder="PH"
                    value={formData.ph}
                    onChange={handleChange}
                />

                <input
                    name="humus"
                    placeholder="Humus"
                    value={formData.humus}
                    onChange={handleChange}
                />

                <input
                    name="tekstura"
                    placeholder="Tekstura"
                    value={formData.tekstura}
                    onChange={handleChange}
                />

                <input
                    name="boja"
                    placeholder="Boja"
                    value={formData.boja}
                    onChange={handleChange}
                />

                <input
                    name="lokacija"
                    placeholder="Lokacija"
                    value={formData.lokacija}
                    onChange={handleChange}
                />

                <button type="submit">
                    Dodadi Pochva
                </button>

            </form>

            <h2>Lista na Pochvi</h2>

            {pochvi.map((pochva) => (

                <div
                    key={pochva._id}
                    style={{
                        border: "1px solid gray",
                        padding: "10px",
                        marginBottom: "10px",
                    }}
                >

                    <h3>{pochva.ime}</h3>

                    <p>
                        <strong>Tip:</strong> {pochva.tip}
                    </p>

                    <p>
                        <strong>PH:</strong> {pochva.ph}
                    </p>

                    <p>
                        <strong>Humus:</strong> {pochva.humus}
                    </p>

                    <p>
                        <strong>Tekstura:</strong> {pochva.tekstura}
                    </p>

                    <p>
                        <strong>Boja:</strong> {pochva.boja}
                    </p>

                    <p>
                        <strong>Lokacija:</strong> {pochva.lokacija}
                    </p>

                    <button
                        onClick={() =>
                            deletePochva(pochva._id)
                        }
                    >
                        Izbrishi
                    </button>

                </div>

            ))}

            <hr />

            <h2>AI Chat za Pochvi</h2>

            <form onSubmit={askAI}>

                <input
                    type="text"
                    placeholder="Prasaj nesto za pochvite..."
                    value={prompt}
                    onChange={(e) =>
                        setPrompt(e.target.value)
                    }
                    style={{
                        width: "400px",
                        marginRight: "10px",
                    }}
                />

                <button type="submit">
                    Prasaj AI
                </button>

            </form>

            {answer && (

                <div
                    style={{
                        marginTop: "20px",
                        border: "1px solid gray",
                        padding: "15px",
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