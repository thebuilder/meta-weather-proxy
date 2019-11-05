# Meta Weather Proxy

Proxy [metaweather.com](https://www.metaweather.com/api/) to set `Access-Control-Allow-Origin: *`. 
This prevents **CORS** issues when trying to access the API from a client.
All the requests are cached on the server, to minimize the amount of repeat requests being made.

## Example
All the Meta Weather location endpoints are forwarded, so you can use as described in the API documentation:

- `https://meta-weather.now.sh/api/location/search/?query=san`

The static icons are also forwarded, so they can also be accessed by entering:

- `https://meta-weather.now.sh/static/img/weather/{{WEATHER_STATE}}.svg`
