import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {
    const INIT_URL = "https://media.istockphoto.com/id/1333043586/photo/tornado-in-stormy-landscape-climate-change-and-natural-disaster-concept.webp?b=1&s=170667a&w=0&k=20&c=yRqdVB5d4hieb6ehqWeF3cUB9Iu5F7JdYgWN8f-pM8Q=";
    const COLD_URL = "https://media.istockphoto.com/id/1040375916/photo/teenage-girl-blowing-nose-on-winter-day.webp?b=1&s=170667a&w=0&k=20&c=xyjTVOaAbTa_npXkdZmmU_j3V_gTC2zD5UxCKH52XrU="
    const HOT_URL = "https://media.istockphoto.com/id/828198028/photo/wood-thermometer.webp?b=1&s=170667a&w=0&k=20&c=-iR4oqoMWGFyYI0eYBfg-4uoamgH5INylLKdS9hp0S0="
    const RAINY_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo="


    return (
        <div className="InfoBox">
            <div className="mainBox">
            <Card sx={{ maxWidth: 345 }} className='mainCard'>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity > 80 ? RAINY_URL : (info.temp > 15) ? HOT_URL : COLD_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <p>Temperature: {info.tempMax}&deg;C</p>
                        <p>Humidity: {info.humidity}</p>
                        <p>Feels Like: {info.feelslike}&deg;C</p>
                        <p>Weather: {info.weather}</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}