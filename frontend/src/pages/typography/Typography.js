import React from "react";
import { Row, Col } from "reactstrap";

import Widget from "../../components/Widget";

const Typography = () => (
  <div>
    <h1 className="page-title">
      업비트 - <span className="fw-semi-bold">정보 보기</span>
    </h1>
    <Row>
      <Col xs={12} lg={6}>
        <Widget
          title={
            <h5>
              Headings{" "}
              <small className="text-muted">Default and customized</small>
            </h5>
          }
          close
          collapse
        >
          <h4>Default headings</h4>
          <p>Basic headings for everyday use</p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <Row>
              <Col sm={6}>
                <h1>h1. Heading</h1>
                <h2>h2. Heading</h2>
                <h3>h3. Heading</h3>
                <h4>h4. Heading</h4>
                <h5>h5. Heading</h5>
                <h6>h6. Heading</h6>
              </Col>
              <Col sm={6}>
                <h1 className="text-danger">h1. Heading</h1>
                <h2 className="text-warning">h2. Heading</h2>
                <h3 className="text-lime">h3. Heading</h3>
                <h4 className="text-success">h4. Heading</h4>
                <h5 className="text-primary">h5. Heading</h5>
                <h6 className="text-info">h6. Heading</h6>
              </Col>
            </Row>
          </div>
          <h4 className="mt-5">Customized headings</h4>
          <p>Enhanced with additional text</p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <h3>
              Headings <small>And some clarification text</small>
            </h3>
          </div>
          <h4 className="mt-5">Display</h4>
          <p>Headings to stand out</p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded overflow-auto">
            <h1 className="display-1">Display 1</h1>
            <h1 className="display-2">Display 2</h1>
            <h1 className="display-3">Display 3</h1>
            <h1 className="display-4">Display 4</h1>
          </div>
          <h4 className="mt-5">Lead</h4>
          <p>
            Make a paragraph stand out by adding{" "}
            <code className="highlighter-rouge">.lead</code>.
          </p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="lead">
              Light Blue Template is admin dashboard template built with
              Bootstrap
            </p>
          </div>
        </Widget>
      </Col>
      <Col xs={12} lg={6}>
        <Widget
          title={
            <h5>
              Body texts <small className="text-muted">Variations</small>
            </h5>
          }
          close
          collapse
        >
          <h4>Basic texts</h4>
          <p>Styling for common texts</p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p>
              You can use the mark tag to <mark>highlight</mark> text.
            </p>
            <p>
              <del>
                This line of text is meant to be treated as deleted text.
              </del>
            </p>
            <p>
              <ins>
                This line of text is meant to be treated as an addition to the
                document.
              </ins>
            </p>
            <p>
              <small>
                This line of text is meant to be treated as fine print.
              </small>
            </p>
            <p>
              <em>This line rendered as italicized text.</em>
            </p>
            <p>
              <strong>This line rendered as bold text.</strong>
            </p>
          </div>
          <h4 className="mt-5">Font weights</h4>
          <p>Various font weights supported</p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p>Thin (default) font weight</p>
            <p className="fw-normal">Normal font weight</p>
            <p className="fw-semi-bold">
              Semi bold to empasize important thing
            </p>
            <p className="fw-bold">Bold font as a high priority</p>
          </div>
          <h4 className="mt-5">Colors</h4>
          <p>Bootstrap state colors can be applied to texts too</p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <p className="text-danger">Some danger text</p>
            <p className="text-warning">Some warning text</p>
            <p className="text-success">Some succes text</p>
            <p className="text-primary">Some primary text</p>
            <p className="text-info">Some info text</p>
          </div>
          <h4 className="mt-5">Blockquotes</h4>
          <p>Citing someone is really easy</p>
          <div className="widget-padding-md w-100 h-100 text-left border rounded">
            <blockquote className="blockquote">
              <p>
                Don&apos;t get set into one form, adapt it and build your own,
                and let it grow, be like water. Empty your mind, be formless,
                shapeless — like water. Now you put water in a cup, it becomes
                the cup; You put water into a bottle it becomes the bottle; You
                put it in a teapot it becomes the teapot. Now water can flow or
                it can crash. Be water, my friend.
              </p>
              <footer className="blockquote-footer">
                Bruce Lee in{" "}
                <cite title="A Warrior's Journey">
                  A Warrior&apos;s Journey
                </cite>
              </footer>
            </blockquote>
          </div>
        </Widget>
      </Col>
    </Row>
  </div>
);

export default Typography;
