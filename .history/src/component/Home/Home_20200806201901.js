import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div className="c-sidebar c-sidebar-dark c-sidebar-show">
  <ul className="c-sidebar-nav">
    <li className="c-sidebar-nav-title">Nav Title</li>
    <li className="c-sidebar-nav-item">
      <a className="c-sidebar-nav-link" href="#">
        <i className="c-sidebar-nav-icon cil-speedometer" /> Nav item
      </a>
    </li>
    <li className="c-sidebar-nav-item">
      <a className="c-sidebar-nav-link" href="#">
        <i className="c-sidebar-nav-icon cil-speedometer" /> With badge
        <span className="badge badge-primary">NEW</span>
      </a>
    </li>
    <li className="c-sidebar-nav-item nav-dropdown">
      <a className="c-sidebar-nav-link nav-dropdown-toggle" href="#">
        <i className="c-sidebar-nav-icon cil-puzzle" /> Nav dropdown
      </a>
      <ul className="c-sidebar-nav-dropdown-items">
        <li className="c-sidebar-nav-item">
          <a className="c-sidebar-nav-link" href="#">
            <i className="c-sidebar-nav-icon cil-puzzle" /> Nav dropdown item
          </a>
        </li>
        <li className="c-sidebar-nav-item">
          <a className="c-sidebar-nav-link" href="#">
            <i className="c-sidebar-nav-icon cil-puzzle" /> Nav dropdown item
          </a>
        </li>
      </ul>
    </li>
    <li className="c-sidebar-nav-item mt-auto">
      <a className="c-sidebar-nav-link c-sidebar-nav-link-success" href="https://coreui.io">
        <i className="c-sidebar-nav-icon cil-cloud-download" /> Download CoreUI</a>
    </li>
    <li className="c-sidebar-nav-item">
      <a className="c-sidebar-nav-link c-sidebar-nav-link-danger" href="https://coreui.io/pro/">
        <i className="c-sidebar-nav-icon cil-layers" /> Try CoreUI
        <strong>PRO</strong>
      </a>
    </li>
  </ul>
  <button className="c-sidebar-minimizer c-brand-minimizer" type="button" />
</div>

        );  
    }
}

export default Home;