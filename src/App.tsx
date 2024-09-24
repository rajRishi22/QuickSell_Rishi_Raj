
import React, { useCallback, useEffect, useState } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import { GET_TICKETS_URL } from './constants';
import { loadGrid, mapUsersByUserId } from './utils';
import { Ticket, User } from './interfaces';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [userData, setUserData] = useState<Record<string, User>>({});
  const [gridData, setGridData] = useState<Record<string, Ticket[]>>({});
  const [grouping, setGrouping] = useState<string>('status');
  const [ordering, setOrdering] = useState<string>('priority');
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Added search term

  useEffect(() => {
    loadSettings();
    fetch(GET_TICKETS_URL)
      .then((resp) => resp.json())
      .then((res) => {
        const { tickets, users } = res;
        setTickets(tickets);
        setUserData(mapUsersByUserId(users));
      })
      .catch((err) => {
        console.error('Error fetching tickets:', err);
      });
  }, []);

  useEffect(() => {
    if (!tickets.length) return;
    const filteredTickets = tickets.filter((ticket) =>
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setGridData(loadGrid(filteredTickets, grouping, ordering));
    setLoading(false);
  }, [grouping, ordering, tickets, searchTerm]); // Added searchTerm dependency

  const onSetGrouping = useCallback((value: string) => {
    setLoading(true);
    setGrouping(value);
    saveSettings({ grouping: value });
  }, []);

  const onSetOrdering = useCallback((value: string) => {
    setLoading(true);
    setOrdering(value);
    saveSettings({ ordering: value });
  }, []);

  const saveSettings = useCallback((data: Record<string, string>) => {
    for (let key in data) localStorage.setItem(key, data[key]);
  }, []);

  const loadSettings = useCallback(() => {
    setGrouping(localStorage.getItem('grouping') || 'status');
    setOrdering(localStorage.getItem('ordering') || 'priority');
  }, []);

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  
  return (
    <div className="App">
      {/* Flex container for Header and Search bar */}
      <div className="header-search-container">
        <Header grouping={grouping} setGrouping={onSetGrouping} ordering={ordering} setOrdering={onSetOrdering} />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search cards..."
            value={searchTerm}
            onChange={onSearchChange}
          />
        </div>
      </div>

      {loading ? <Loader /> : <Grid gridData={gridData} grouping={grouping} userIdToData={userData} />}
    </div>
  );
}

export default App;
