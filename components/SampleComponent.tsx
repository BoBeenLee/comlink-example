import { inject, observer } from 'mobx-react'
import Link from 'next/link'
import React from 'react'
import * as Comlink from 'comlink';

import { IStore } from '../store'
import Clock from './Clock'
import CounterWorker from 'src/workers/counter.worker';

interface IOwnProps {
  store?: IStore
  title: string
  linkTo: string
}

@inject('store')
@observer
class SampleComponent extends React.Component<IOwnProps> {



  public intervalId: any;

  constructor(props:IOwnProps) {
    super(props);

    this.intervalId = setInterval(this.counting, 1000);
  }

  public componentDidMount() {
    if (!this.props.store) {
      return
    }
    this.props.store.start()
  }

  public componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
    if (!this.props.store) {
      return
    }
    this.props.store.stop()
  }

  public render() {
    if (!this.props.store) {
      return <div>Store not defined</div>
    }
    return (
      <div>
        <h1>{this.props.title}</h1>
        <Clock
          lastUpdate={this.props.store.lastUpdate}
          light={this.props.store.light}
        />
        <nav>
          <Link href={this.props.linkTo}>
            <a>Navigate</a>
          </Link>
        </nav>
      </div>
    )
  }

  private counting = async () => {
    const worker = new CounterWorker();
    // WebWorkers use `postMessage` and therefore work with Comlink.
    const obj = Comlink.wrap<any>(worker);
    console.log(`Counter: ${await obj.counter}`);
    await obj.inc();
    console.log(`Counter: ${await obj.counter}`);
  };
}

export default SampleComponent
