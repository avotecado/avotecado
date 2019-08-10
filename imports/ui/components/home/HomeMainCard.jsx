import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import HomeHeroButton from './HomeHeroButton';
import {useStylesHomeMainCard} from "./HomeMainCardStyles";


class HomeMainCard extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <Paper className={classes.homeHeroUnit}>
                <img alt='image'
                     className={classes.imgStyle}
                     src={'photos/homeHeroImages/vancouverSpecialsKevinLanthier.jpg'}
                />
                <Grid container spacing={1} alignItems="flex-end">
                    <div className={classes.divMain}>
                        <Grid item xs={12} className={classes.hhuFrame}>
                            <Grid container direction="column" alignItems="flex-start">
                                <Typography className={classes.hhuTitle}>avotecado</Typography>
                                <Typography className={classes.hhuSubheading} variant="h4">
                                    Track your local politicians & see how they voted municipal on matters
                                </Typography>
                                <Typography className={classes.hhuActionPrompt} variant="body1">
                                    Sign up to get the latest on your local politics
                                </Typography>
                                <Grid item xs={6} className={classes.hhuButtonContainer}>
                                    <HomeHeroButton className={classes.hhuButton}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Paper>
        );
    }
}

export default withStyles(useStylesHomeMainCard)(HomeMainCard);

