import { useSession } from 'next-auth/client'
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import Link from 'next/link';
import { useEffect } from "react";
import { useRouter } from 'next/router';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        backgroundColor: '#424242',
        color: 'white',
        marginBottom: '20px',
    },
    media: {
        height: 140,
        color: 'white',
    },
});

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 500px;
  height: 100vh;
  color: #666;
`;

export default function Index() {
    const [ session, loading ] = useSession();
    const router = useRouter();
    const classes = useStyles();

    if (!session) {
        router.push('/');
    }


    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <Main>
            <h1>マイページ</h1>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://www.ghibli.jp/gallery/chihiro001.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            太郎
                        </Typography>
                        <Typography variant="body2" component="p">
                            高校時代はバレーボール部に所属、選手として活躍した。趣味は読書で、『MEN'S NON-NO』誌上でブックガイドをセレクトしたこともある。
                            母の影響を受け、好きな作家は北方謙三や司馬遼太郎などの歴史小説家。その他には村上龍や恩田陸、穂村弘なども好む。
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Link href="/">
                <a>
                    <Button size="large" variant="outlined" color="secondary">
                        Topに戻る
                    </Button>
                </a>
            </Link>
        </Main>
    )
}
