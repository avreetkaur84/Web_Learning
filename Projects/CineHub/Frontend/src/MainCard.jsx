import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "./MainCard.css"

export default function MainCard({genreName, genreDiscription, genreImage}) {
    // let history = useHistory();

    // const handleExploreClick = () => {
    //   history.push('/api/action');
    // };

    return (
        <Card sx={{ maxWidth: 300 }} className='card'>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" className='MainHead'>
              <b>{genreName}</b>
          </Typography>
        </CardContent>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={genreImage}
          />
          <CardContent>
            <Typography variant="body2" color="22577A" className='genreDescription'>
              <i>{genreDiscription}</i>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button size="small" color="error" variant="contained" >
            Explore
          </Button>
        </CardActions>
      </Card>
    );
}