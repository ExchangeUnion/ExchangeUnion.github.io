import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../components/async-component';
import { UnauthenticatedRoute, AppliedRoute } from '../components/custom-route';

const Home = asyncComponent(() => import('../containers/home'));
const HowToWorks = asyncComponent(() => import('../containers/how-to-works'));
const UseCases = asyncComponent(() => import('../containers/use-cases'));
const XUC = asyncComponent(() => import('../containers/xuc'));
const Team = asyncComponent(() => import('../containers/team'));
const News = asyncComponent(() => import('../containers/news'));
const Terms = asyncComponent(() => import('../containers/terms'));
const Privacy = asyncComponent(() => import('../containers/privacy'));
const SubscribeSuccess = asyncComponent(() => import('../containers/subscribe-success'));
const MediumCallback = asyncComponent(() => import('../containers/medium-callback'));
const NotFound = asyncComponent(() => import('../containers/not-found'));

export default ({childProps}: any) => (
    <Switch>
        <AppliedRoute path="/" exact={true} component={Home} props={childProps}/>
        <UnauthenticatedRoute path="/how_it_works" exact={true} component={HowToWorks} props={childProps}/>
        <UnauthenticatedRoute path="/use_cases" exact={true} component={UseCases} props={childProps}/>
        <UnauthenticatedRoute path="/xuc" exact={true} component={XUC} props={childProps}/>
        <UnauthenticatedRoute path="/team" exact={true} component={Team} props={childProps}/>
        <UnauthenticatedRoute path="/news" exact={true} component={News} props={childProps}/>
        <UnauthenticatedRoute path="/subscribe_success/:base" exact={true} component={SubscribeSuccess} props={childProps}/>
        <UnauthenticatedRoute path="/terms" exact={true} component={Terms} props={childProps}/>
        <UnauthenticatedRoute path="/privacy" exact={true} component={Privacy} props={childProps}/>
       <UnauthenticatedRoute path="/callback/medium" exact={true} component={MediumCallback} props={childProps}/>
        <Route component={NotFound}/>
    </Switch>
);