import React, { useState } from "react";

export default function DomainSearch() {
    const [domain, setDomain] = useState("");
    const [result, setResult] = useState(null);

    const handleSearch = async () => {
        const res = await fetch(
            `https://api.api-ninjas.com/v1/whois?domain=${domain}`,
            {
                headers: { "X-Api-Key": "PqwLkSzgUddgccOwP321qg==Bsc7Z5kcc6oKtLaU" },
            }
        );
        const data = await res.json();
        setResult(data);
    };

    const formatDate = (timestamp) =>
        timestamp ? new Date(timestamp * 1000).toLocaleDateString() : "";

    return (
        <div>
            <h2>Domain WHOIS Lookup</h2>

            <div>
                <input
                    type="text"
                    placeholder="example.com"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="border"
                />
                <button onClick={handleSearch} className="bg-purple-600 text-white" > Search </button>
            </div>

            {result && (
                <div>
                    <p>Domain: {result.domain_name}</p>
                    <p>Registrar: {result.registrar}</p>
                    <p>WHOIS Server: {result.whois_server}</p>
                    <p>Created: {formatDate(result.creation_date)}</p>
                    <p>Updated: {formatDate(result.updated_date)}</p>
                    <p>Expires: {formatDate(result.expiration_date)}</p>
                    <p>DNSSEC: {result.dnssec}</p>
                    <ul>
                        {result.name_servers?.map((ns, i) => (
                            <li key={i}>{ns}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
