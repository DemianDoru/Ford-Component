export class DataService {
  async fetchDataFromAPI(vin: string): Promise<any> {
    try {
      const apiUrl = 'http://oemapi-env.eba-g3qtdyqb.us-east-2.elasticbeanstalk.com/api/vindecoder';
      const postData = {
        vin: vin,
      };

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      return await response.json();
    } catch (error) {
      console.error('Error making POST request:', error);
      throw error;
    }
  }
}
