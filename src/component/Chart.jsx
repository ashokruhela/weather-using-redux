import _ from 'lodash';
import React, {Component} from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

const average = data => Math.round(_.sum(data)/data.length);

const Chart = (props) => 
<div>
    <Sparklines data = {props.data} width={150} height={80}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="mean" />
    </Sparklines>
    <div>{average(props.data)} {props.units}</div>
</div>

export default Chart;