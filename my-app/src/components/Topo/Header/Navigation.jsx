import React from "react";
import "./style.css";

let logoMenu = ["https://lh3.googleusercontent.com/BteCAYFh41GCRP4pa3QgqaOrehp1_eZzV35TjtYZlYTopDEL173kAYmuwwkJujcHGq45lqHZdomDL19J3-oXAyqb5LZyJ5depdEF2OxApIL05Dn6jVFSsQDmpYVzmKfaSGN_TcB7_s4vLsDkUb2l1NtbRTQW9yGtrhafBjvswM9laCOqrR_fVglGXz0NYjEM-lRn5IvEWrnPDDqDN2atzbaCSDtak9qjIHBAcxAXsBT3LLQCArTE--uFqp-gYuiXQZe5LvfJeAy5-1rd2Xdnx5MMaCCdZ-Wa-NninxtfqvX9iGyJZAa_y3ro1OZnU2dokyXB5fd11vCq4tOQ_8W8UelknVdPPwWTD7_WCj3c9S0Xo8ahAzqBrhxn51q0sKTpQiAg9bz2gHWQpl4J3cQmWy97DvVpp4YE59i8PnfqSkucNtTBCmTqIsJaxDAt9KGmiSC4H9nLcNCTPQ2oQhXoylVoh3MMs7rKtuQj81BvBPn86FJkfXesgz4fhRfathAELH5WVozGZxnUzl1Ij2YVaPx_6j70i39-ZxmqX9F8DAanb90FEEYueQ2eWe3wJvz1MQ73RlBSGriAIwKJdv6smLLG3lASVktJkUCli3arV8nUgx7wIXOFtpajqTYR4PyEAkSfTbMVS4k-8StR3ZcqCjdqT4Ch-5QuZMhLFl5f7LeKBADHv4CU2yPO8iflO6_L8dxnzykY5sNk8Q4mujBvJBE=w1325-h479-no?authuser=0"]

function Navigation() {
  return (
    <section>
        <nav>
            <a href="#" className="logoMenu"><img src={logoMenu[0]} width="120px"/></a>
            <div className="mobile-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <ul className="nav-list">
                <li><a href="#artistas">Home</a></li>
                <li><a href="#sobre">Sobre</a></li>
                <li><a href="#galeria">Galeria</a></li>
                <li><a href="#local">Local</a></li>
                <li><a href="#contato">Contato</a></li>
                <li><a href="#equipe">Equipe</a></li>
            </ul>
        </nav>
    <script src="./navbar.js"></script>
    </section>
  );
}

export default Navigation;
