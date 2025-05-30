import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postapi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

function Country() {

    const [isPending, startTransition ] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        startTransition(async() => {
            const res = await getCountryData();
            setCountries(res.data);
        });
    }, []);

    const searchCountry = (country) => {
        if(search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return country;
    }

    const filterRegion = (country) => {
        if(filter === "all") return country;
        return country.region === filter;
    }

    const filterCountries = countries.filter((country) => searchCountry(country) && filterRegion(country));

    if (isPending) return <Loader />;

    return(
        <section className="country-section">
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries}/>
            <ul className="grid grid-four-cols">
                {
                    filterCountries.map((currCountry, index) => {
                        return <CountryCard country={currCountry} key={index} />;
                    })
                }
            </ul>
        </section>
    );
}

export default Country