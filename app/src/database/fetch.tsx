import { supabase } from './supabase';
import { order } from '@supabase/supabase-js';

async function fetchData() {
    const { data, error } = await supabase
        .from('records')
        .select('*')
        .order('created_at', { ascending: false }) // Use the 'order' function
        .limit(30);

    if (error) {
        console.error('Error fetching data:', error);
        return;
    }

    const reversedData = data.reverse();


    return reversedData;
    // You can now use this data in your frontend
}

export { fetchData };
