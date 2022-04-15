import React from 'react';
import Papa from 'papaparse';

async function GetData(artist) {
    const data = Papa.parse(await fetchCsv());
    console.log(data);
    return data;
}

async function fetchCsv() {
    const response = await fetch('data/mycsv.csv');
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    console.log('csv', csv);
    return csv;
}