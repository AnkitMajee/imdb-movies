import Results from '@/components/Result';
const API_KEY = process.env.API_KEY;

export default async function Home() {  
  let data;
  if (true) { // Mocking the API response
    data = {
      results: [
        // Add mock data here
        { id: 1, title: 'Mock Movie 1', overview: 'This is a mock movie.' },
        { id: 2, title: 'Mock Movie 2', overview: 'This is another mock movie.' },
        { id: 3, title: 'Mock Movie 2', overview: 'This is another mock movie.' },
      ],
    };
  } else {
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`
    );
    data = await res.json();
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
  }

  const results = data.results;
  return (
    <div>
      <Results results={results} />
    </div>
  );
}