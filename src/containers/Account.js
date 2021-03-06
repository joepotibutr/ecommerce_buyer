import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import { ButtonStyled } from '../components/Etc/Reusable'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { logout } from '../actions/auth'


class Account extends Component {
    
    render() {
        const { isAuthenticated , logout } = this.props

        if(isAuthenticated){
            return (
                <Grid>
                    <Grid.Row textAlign={'center'} centered>
                        <Grid.Column width={4} verticalAlign={'bottom'}>
                          <h4> Order History </h4> 
                            <span> You haven't place any orders yet.</span>
                        </Grid.Column>
                        <Grid.Column width={5}>
                        <div style={{maxWidth:'500px',margin:'0 auto',paddingTop:'50px'}}>
                          <div>
                             <h1 style={{textAlign:'center',marginBottom:'30px'}}>Account</h1>
                          </div>
                            <div style={{width:'60%',margin:'0 auto'}}>
                                <ButtonStyled
                                    onClick={() => logout()}
                                >LOGOUT
                                </ButtonStyled>
                            </div>
                        </div>
                        </Grid.Column>
                        <Grid.Column width={4} verticalAlign={'bottom'}>
                            <h4> Account Details </h4>
                            <div style={{
                                width:'170px',
                                height:'45px',
                                margin:'0 auto',
                                border:'1px solid',
                                cursor:'pointer',
                                paddingTop:'12px'
                            }}>
                            <span style={{
                                color:'gray',
                                letterSpacing:'1px',
                                fontSize:'12px'
                            }}>View Address (0)</span>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        )}
        else return <Redirect to='/account/login' />
    }
}
const mapStateToProps = state => ({
    isAuthenticated : !!state.user.token
})

export default connect(mapStateToProps,{ logout })(Account)
