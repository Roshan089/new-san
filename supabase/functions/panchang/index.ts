// Mock data generator for Panchang
function getTodaysPanchang() {
  const today = new Date();
  
  // List of Sanskrit terms for realistic mock data
  const tithis = ['Pratipada', 'Dwitiya', 'Tritiya', 'Chaturthi', 'Panchami', 
                  'Shashthi', 'Saptami', 'Ashtami', 'Navami', 'Dashami', 
                  'Ekadashi', 'Dwadashi', 'Trayodashi', 'Chaturdashi', 'Purnima', 'Amavasya'];
  
  const nakshatras = ['Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 
                      'Ardra', 'Punarvasu', 'Pushya', 'Ashlesha', 'Magha'];
                      
  const yogas = ['Vishkambha', 'Priti', 'Ayushman', 'Saubhagya', 'Shobhana', 
                 'Atiganda', 'Sukarma', 'Dhriti', 'Shula', 'Ganda'];
                 
  const karanas = ['Bava', 'Balava', 'Kaulava', 'Taitila', 'Garija', 
                   'Vanija', 'Vishti', 'Shakuni', 'Chatushpada', 'Naga'];

  // Get random items from arrays
  const randomItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

  return {
    date: today.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    tithi: randomItem(tithis),
    nakshatra: randomItem(nakshatras),
    yoga: randomItem(yogas),
    karana: randomItem(karanas)
  };
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, OPTIONS'
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (req.method !== 'GET') {
      throw new Error('Method not allowed');
    }

    const data = getTodaysPanchang();

    return new Response(
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
        status: 200,
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ 
        error: error.message || 'An error occurred while fetching panchang data'
      }),
      {
        status: error.status || 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders,
        },
      },
    );
  }
});