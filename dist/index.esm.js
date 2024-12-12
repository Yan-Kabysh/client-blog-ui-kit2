import require$$0, {
  createElement,
  useEffect,
  useState,
  isValidElement,
} from 'react';

var jsxRuntime = { exports: {} };

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production() {
  if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
  hasRequiredReactJsxRuntime_production = 1;
  var REACT_ELEMENT_TYPE = Symbol.for('react.transitional.element'),
    REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
  function jsxProd(type, config, maybeKey) {
    var key = null;
    void 0 !== maybeKey && (key = '' + maybeKey);
    void 0 !== config.key && (key = '' + config.key);
    if ('key' in config) {
      maybeKey = {};
      for (var propName in config)
        'key' !== propName && (maybeKey[propName] = config[propName]);
    } else maybeKey = config;
    config = maybeKey.ref;
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key,
      ref: void 0 !== config ? config : null,
      props: maybeKey,
    };
  }
  reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
  reactJsxRuntime_production.jsx = jsxProd;
  reactJsxRuntime_production.jsxs = jsxProd;
  return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development() {
  if (hasRequiredReactJsxRuntime_development)
    return reactJsxRuntime_development;
  hasRequiredReactJsxRuntime_development = 1;
  'production' !== process.env.NODE_ENV &&
    (function () {
      function getComponentNameFromType(type) {
        if (null == type) return null;
        if ('function' === typeof type)
          return type.$$typeof === REACT_CLIENT_REFERENCE$2
            ? null
            : type.displayName || type.name || null;
        if ('string' === typeof type) return type;
        switch (type) {
          case REACT_FRAGMENT_TYPE:
            return 'Fragment';
          case REACT_PORTAL_TYPE:
            return 'Portal';
          case REACT_PROFILER_TYPE:
            return 'Profiler';
          case REACT_STRICT_MODE_TYPE:
            return 'StrictMode';
          case REACT_SUSPENSE_TYPE:
            return 'Suspense';
          case REACT_SUSPENSE_LIST_TYPE:
            return 'SuspenseList';
        }
        if ('object' === typeof type)
          switch (
            ('number' === typeof type.tag &&
              console.error(
                'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.',
              ),
            type.$$typeof)
          ) {
            case REACT_CONTEXT_TYPE:
              return (type.displayName || 'Context') + '.Provider';
            case REACT_CONSUMER_TYPE:
              return (type._context.displayName || 'Context') + '.Consumer';
            case REACT_FORWARD_REF_TYPE:
              var innerType = type.render;
              type = type.displayName;
              type ||
                ((type = innerType.displayName || innerType.name || ''),
                (type =
                  '' !== type ? 'ForwardRef(' + type + ')' : 'ForwardRef'));
              return type;
            case REACT_MEMO_TYPE:
              return (
                (innerType = type.displayName || null),
                null !== innerType
                  ? innerType
                  : getComponentNameFromType(type.type) || 'Memo'
              );
            case REACT_LAZY_TYPE:
              innerType = type._payload;
              type = type._init;
              try {
                return getComponentNameFromType(type(innerType));
              } catch (x) {}
          }
        return null;
      }
      function testStringCoercion(value) {
        return '' + value;
      }
      function checkKeyStringCoercion(value) {
        try {
          testStringCoercion(value);
          var JSCompiler_inline_result = !1;
        } catch (e) {
          JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
          JSCompiler_inline_result = console;
          var JSCompiler_temp_const = JSCompiler_inline_result.error;
          var JSCompiler_inline_result$jscomp$0 =
            ('function' === typeof Symbol &&
              Symbol.toStringTag &&
              value[Symbol.toStringTag]) ||
            value.constructor.name ||
            'Object';
          JSCompiler_temp_const.call(
            JSCompiler_inline_result,
            'The provided key is an unsupported type %s. This value must be coerced to a string before using it here.',
            JSCompiler_inline_result$jscomp$0,
          );
          return testStringCoercion(value);
        }
      }
      function disabledLog() {}
      function disableLogs() {
        if (0 === disabledDepth) {
          prevLog = console.log;
          prevInfo = console.info;
          prevWarn = console.warn;
          prevError = console.error;
          prevGroup = console.group;
          prevGroupCollapsed = console.groupCollapsed;
          prevGroupEnd = console.groupEnd;
          var props = {
            configurable: !0,
            enumerable: !0,
            value: disabledLog,
            writable: !0,
          };
          Object.defineProperties(console, {
            info: props,
            log: props,
            warn: props,
            error: props,
            group: props,
            groupCollapsed: props,
            groupEnd: props,
          });
        }
        disabledDepth++;
      }
      function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
          var props = { configurable: !0, enumerable: !0, writable: !0 };
          Object.defineProperties(console, {
            log: assign({}, props, { value: prevLog }),
            info: assign({}, props, { value: prevInfo }),
            warn: assign({}, props, { value: prevWarn }),
            error: assign({}, props, { value: prevError }),
            group: assign({}, props, { value: prevGroup }),
            groupCollapsed: assign({}, props, { value: prevGroupCollapsed }),
            groupEnd: assign({}, props, { value: prevGroupEnd }),
          });
        }
        0 > disabledDepth &&
          console.error(
            'disabledDepth fell below zero. This is a bug in React. Please file an issue.',
          );
      }
      function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix)
          try {
            throw Error();
          } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = (match && match[1]) || '';
            suffix =
              -1 < x.stack.indexOf('\n    at')
                ? ' (<anonymous>)'
                : -1 < x.stack.indexOf('@')
                  ? '@unknown:0:0'
                  : '';
          }
        return '\n' + prefix + name + suffix;
      }
      function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return '';
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
          var RunInRootFrame = {
            DetermineComponentFrameRoot: function () {
              try {
                if (construct) {
                  var Fake = function () {
                    throw Error();
                  };
                  Object.defineProperty(Fake.prototype, 'props', {
                    set: function () {
                      throw Error();
                    },
                  });
                  if ('object' === typeof Reflect && Reflect.construct) {
                    try {
                      Reflect.construct(Fake, []);
                    } catch (x) {
                      var control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                  } else {
                    try {
                      Fake.call();
                    } catch (x$0) {
                      control = x$0;
                    }
                    fn.call(Fake.prototype);
                  }
                } else {
                  try {
                    throw Error();
                  } catch (x$1) {
                    control = x$1;
                  }
                  (Fake = fn()) &&
                    'function' === typeof Fake.catch &&
                    Fake.catch(function () {});
                }
              } catch (sample) {
                if (sample && control && 'string' === typeof sample.stack)
                  return [sample.stack, control.stack];
              }
              return [null, null];
            },
          };
          RunInRootFrame.DetermineComponentFrameRoot.displayName =
            'DetermineComponentFrameRoot';
          var namePropDescriptor = Object.getOwnPropertyDescriptor(
            RunInRootFrame.DetermineComponentFrameRoot,
            'name',
          );
          namePropDescriptor &&
            namePropDescriptor.configurable &&
            Object.defineProperty(
              RunInRootFrame.DetermineComponentFrameRoot,
              'name',
              { value: 'DetermineComponentFrameRoot' },
            );
          var _RunInRootFrame$Deter =
              RunInRootFrame.DetermineComponentFrameRoot(),
            sampleStack = _RunInRootFrame$Deter[0],
            controlStack = _RunInRootFrame$Deter[1];
          if (sampleStack && controlStack) {
            var sampleLines = sampleStack.split('\n'),
              controlLines = controlStack.split('\n');
            for (
              _RunInRootFrame$Deter = namePropDescriptor = 0;
              namePropDescriptor < sampleLines.length &&
              !sampleLines[namePropDescriptor].includes(
                'DetermineComponentFrameRoot',
              );

            )
              namePropDescriptor++;
            for (
              ;
              _RunInRootFrame$Deter < controlLines.length &&
              !controlLines[_RunInRootFrame$Deter].includes(
                'DetermineComponentFrameRoot',
              );

            )
              _RunInRootFrame$Deter++;
            if (
              namePropDescriptor === sampleLines.length ||
              _RunInRootFrame$Deter === controlLines.length
            )
              for (
                namePropDescriptor = sampleLines.length - 1,
                  _RunInRootFrame$Deter = controlLines.length - 1;
                1 <= namePropDescriptor &&
                0 <= _RunInRootFrame$Deter &&
                sampleLines[namePropDescriptor] !==
                  controlLines[_RunInRootFrame$Deter];

              )
                _RunInRootFrame$Deter--;
            for (
              ;
              1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter;
              namePropDescriptor--, _RunInRootFrame$Deter--
            )
              if (
                sampleLines[namePropDescriptor] !==
                controlLines[_RunInRootFrame$Deter]
              ) {
                if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                  do
                    if (
                      (namePropDescriptor--,
                      _RunInRootFrame$Deter--,
                      0 > _RunInRootFrame$Deter ||
                        sampleLines[namePropDescriptor] !==
                          controlLines[_RunInRootFrame$Deter])
                    ) {
                      var _frame =
                        '\n' +
                        sampleLines[namePropDescriptor].replace(
                          ' at new ',
                          ' at ',
                        );
                      fn.displayName &&
                        _frame.includes('<anonymous>') &&
                        (_frame = _frame.replace(
                          '<anonymous>',
                          fn.displayName,
                        ));
                      'function' === typeof fn &&
                        componentFrameCache.set(fn, _frame);
                      return _frame;
                    }
                  while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                }
                break;
              }
          }
        } finally {
          (reentry = !1),
            (ReactSharedInternals.H = previousDispatcher),
            reenableLogs(),
            (Error.prepareStackTrace = frame);
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : '')
          ? describeBuiltInComponentFrame(sampleLines)
          : '';
        'function' === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
      }
      function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return '';
        if ('function' === typeof type) {
          var prototype = type.prototype;
          return describeNativeComponentFrame(
            type,
            !(!prototype || !prototype.isReactComponent),
          );
        }
        if ('string' === typeof type)
          return describeBuiltInComponentFrame(type);
        switch (type) {
          case REACT_SUSPENSE_TYPE:
            return describeBuiltInComponentFrame('Suspense');
          case REACT_SUSPENSE_LIST_TYPE:
            return describeBuiltInComponentFrame('SuspenseList');
        }
        if ('object' === typeof type)
          switch (type.$$typeof) {
            case REACT_FORWARD_REF_TYPE:
              return (
                (type = describeNativeComponentFrame(type.render, !1)), type
              );
            case REACT_MEMO_TYPE:
              return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
              prototype = type._payload;
              type = type._init;
              try {
                return describeUnknownElementTypeFrameInDEV(type(prototype));
              } catch (x) {}
          }
        return '';
      }
      function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
      }
      function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
          if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.ref;
      }
      function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
          var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
          if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
      }
      function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
          specialPropKeyWarningShown ||
            ((specialPropKeyWarningShown = !0),
            console.error(
              '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)',
              displayName,
            ));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: !0,
        });
      }
      function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] ||
          ((didWarnAboutElementRef[componentName] = !0),
          console.error(
            'Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.',
          ));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
      }
      function ReactElement(type, key, _ref, self, source, owner, props) {
        _ref = props.ref;
        type = {
          $$typeof: REACT_ELEMENT_TYPE,
          type: type,
          key: key,
          props: props,
          _owner: owner,
        };
        null !== (void 0 !== _ref ? _ref : null)
          ? Object.defineProperty(type, 'ref', {
              enumerable: !1,
              get: elementRefGetterWithDeprecationWarning,
            })
          : Object.defineProperty(type, 'ref', { enumerable: !1, value: null });
        type._store = {};
        Object.defineProperty(type._store, 'validated', {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: 0,
        });
        Object.defineProperty(type, '_debugInfo', {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: null,
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
      }
      function jsxDEVImpl(
        type,
        config,
        maybeKey,
        isStaticChildren,
        source,
        self,
      ) {
        if (
          'string' === typeof type ||
          'function' === typeof type ||
          type === REACT_FRAGMENT_TYPE ||
          type === REACT_PROFILER_TYPE ||
          type === REACT_STRICT_MODE_TYPE ||
          type === REACT_SUSPENSE_TYPE ||
          type === REACT_SUSPENSE_LIST_TYPE ||
          type === REACT_OFFSCREEN_TYPE ||
          ('object' === typeof type &&
            null !== type &&
            (type.$$typeof === REACT_LAZY_TYPE ||
              type.$$typeof === REACT_MEMO_TYPE ||
              type.$$typeof === REACT_CONTEXT_TYPE ||
              type.$$typeof === REACT_CONSUMER_TYPE ||
              type.$$typeof === REACT_FORWARD_REF_TYPE ||
              type.$$typeof === REACT_CLIENT_REFERENCE$1 ||
              void 0 !== type.getModuleId))
        ) {
          var children = config.children;
          if (void 0 !== children)
            if (isStaticChildren)
              if (isArrayImpl(children)) {
                for (
                  isStaticChildren = 0;
                  isStaticChildren < children.length;
                  isStaticChildren++
                )
                  validateChildKeys(children[isStaticChildren], type);
                Object.freeze && Object.freeze(children);
              } else
                console.error(
                  'React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.',
                );
            else validateChildKeys(children, type);
        } else {
          children = '';
          if (
            void 0 === type ||
            ('object' === typeof type &&
              null !== type &&
              0 === Object.keys(type).length)
          )
            children +=
              " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
          null === type
            ? (isStaticChildren = 'null')
            : isArrayImpl(type)
              ? (isStaticChildren = 'array')
              : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE
                ? ((isStaticChildren =
                    '<' +
                    (getComponentNameFromType(type.type) || 'Unknown') +
                    ' />'),
                  (children =
                    ' Did you accidentally export a JSX literal instead of a component?'))
                : (isStaticChildren = typeof type);
          console.error(
            'React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
            isStaticChildren,
            children,
          );
        }
        if (hasOwnProperty.call(config, 'key')) {
          children = getComponentNameFromType(type);
          var keys = Object.keys(config).filter(function (k) {
            return 'key' !== k;
          });
          isStaticChildren =
            0 < keys.length
              ? '{key: someKey, ' + keys.join(': ..., ') + ': ...}'
              : '{key: someKey}';
          didWarnAboutKeySpread[children + isStaticChildren] ||
            ((keys =
              0 < keys.length ? '{' + keys.join(': ..., ') + ': ...}' : '{}'),
            console.error(
              'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
              isStaticChildren,
              children,
              keys,
              children,
            ),
            (didWarnAboutKeySpread[children + isStaticChildren] = !0));
        }
        children = null;
        void 0 !== maybeKey &&
          (checkKeyStringCoercion(maybeKey), (children = '' + maybeKey));
        hasValidKey(config) &&
          (checkKeyStringCoercion(config.key), (children = '' + config.key));
        hasValidRef(config);
        if ('key' in config) {
          maybeKey = {};
          for (var propName in config)
            'key' !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children &&
          ((config =
            'function' === typeof type
              ? type.displayName || type.name || 'Unknown'
              : type),
          children && defineKeyPropWarningGetter(maybeKey, config));
        return ReactElement(
          type,
          children,
          null,
          self,
          source,
          getOwner(),
          maybeKey,
        );
      }
      function validateChildKeys(node, parentType) {
        if (
          'object' === typeof node &&
          node &&
          node.$$typeof !== REACT_CLIENT_REFERENCE
        )
          if (isArrayImpl(node))
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              isValidElement(child) && validateExplicitKey(child, parentType);
            }
          else if (isValidElement(node))
            node._store && (node._store.validated = 1);
          else if (
            (null === node || 'object' !== typeof node
              ? (i = null)
              : ((i =
                  (MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL]) ||
                  node['@@iterator']),
                (i = 'function' === typeof i ? i : null)),
            'function' === typeof i &&
              i !== node.entries &&
              ((i = i.call(node)), i !== node))
          )
            for (; !(node = i.next()).done; )
              isValidElement(node.value) &&
                validateExplicitKey(node.value, parentType);
      }
      function isValidElement(object) {
        return (
          'object' === typeof object &&
          null !== object &&
          object.$$typeof === REACT_ELEMENT_TYPE
        );
      }
      function validateExplicitKey(element, parentType) {
        if (
          element._store &&
          !element._store.validated &&
          null == element.key &&
          ((element._store.validated = 1),
          (parentType = getCurrentComponentErrorInfo(parentType)),
          !ownerHasKeyUseWarning[parentType])
        ) {
          ownerHasKeyUseWarning[parentType] = !0;
          var childOwner = '';
          element &&
            null != element._owner &&
            element._owner !== getOwner() &&
            ((childOwner = null),
            'number' === typeof element._owner.tag
              ? (childOwner = getComponentNameFromType(element._owner.type))
              : 'string' === typeof element._owner.name &&
                (childOwner = element._owner.name),
            (childOwner = ' It was passed a child from ' + childOwner + '.'));
          var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
          ReactSharedInternals.getCurrentStack = function () {
            var stack = describeUnknownElementTypeFrameInDEV(element.type);
            prevGetCurrentStack && (stack += prevGetCurrentStack() || '');
            return stack;
          };
          console.error(
            'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
            parentType,
            childOwner,
          );
          ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
      }
      function getCurrentComponentErrorInfo(parentType) {
        var info = '',
          owner = getOwner();
        owner &&
          (owner = getComponentNameFromType(owner.type)) &&
          (info = '\n\nCheck the render method of `' + owner + '`.');
        info ||
          ((parentType = getComponentNameFromType(parentType)) &&
            (info =
              '\n\nCheck the top-level render call using <' +
              parentType +
              '>.'));
        return info;
      }
      var React = require$$0,
        REACT_ELEMENT_TYPE = Symbol.for('react.transitional.element'),
        REACT_PORTAL_TYPE = Symbol.for('react.portal'),
        REACT_FRAGMENT_TYPE = Symbol.for('react.fragment'),
        REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode'),
        REACT_PROFILER_TYPE = Symbol.for('react.profiler');
      var REACT_CONSUMER_TYPE = Symbol.for('react.consumer'),
        REACT_CONTEXT_TYPE = Symbol.for('react.context'),
        REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref'),
        REACT_SUSPENSE_TYPE = Symbol.for('react.suspense'),
        REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list'),
        REACT_MEMO_TYPE = Symbol.for('react.memo'),
        REACT_LAZY_TYPE = Symbol.for('react.lazy'),
        REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen'),
        MAYBE_ITERATOR_SYMBOL = Symbol.iterator,
        REACT_CLIENT_REFERENCE$2 = Symbol.for('react.client.reference'),
        ReactSharedInternals =
          React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        hasOwnProperty = Object.prototype.hasOwnProperty,
        assign = Object.assign,
        REACT_CLIENT_REFERENCE$1 = Symbol.for('react.client.reference'),
        isArrayImpl = Array.isArray,
        disabledDepth = 0,
        prevLog,
        prevInfo,
        prevWarn,
        prevError,
        prevGroup,
        prevGroupCollapsed,
        prevGroupEnd;
      disabledLog.__reactDisabledLog = !0;
      var prefix,
        suffix,
        reentry = !1;
      var componentFrameCache = new (
        'function' === typeof WeakMap ? WeakMap : Map
      )();
      var REACT_CLIENT_REFERENCE = Symbol.for('react.client.reference'),
        specialPropKeyWarningShown;
      var didWarnAboutElementRef = {};
      var didWarnAboutKeySpread = {},
        ownerHasKeyUseWarning = {};
      reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
      reactJsxRuntime_development.jsx = function (
        type,
        config,
        maybeKey,
        source,
        self,
      ) {
        return jsxDEVImpl(type, config, maybeKey, !1, source, self);
      };
      reactJsxRuntime_development.jsxs = function (
        type,
        config,
        maybeKey,
        source,
        self,
      ) {
        return jsxDEVImpl(type, config, maybeKey, !0, source, self);
      };
    })();
  return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime() {
  if (hasRequiredJsxRuntime) return jsxRuntime.exports;
  hasRequiredJsxRuntime = 1;

  if (process.env.NODE_ENV === 'production') {
    jsxRuntime.exports = requireReactJsxRuntime_production();
  } else {
    jsxRuntime.exports = requireReactJsxRuntime_development();
  }
  return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var Button = function Button(_a) {
  var onClick = _a.onClick,
    label = _a.label,
    _b = _a.variant,
    variant = _b === void 0 ? 'primary' : _b,
    _c = _a.size,
    size = _c === void 0 ? 'medium' : _c,
    title = _a.title,
    disabled = _a.disabled;
  return jsxRuntimeExports.jsx('button', {
    disabled: disabled,
    className: 'button '.concat(variant, ' ').concat(size),
    onClick: onClick,
    title: title,
    children: label,
  });
};

var Body = function Body(_a) {
  var children = _a.children,
    _b = _a.type,
    type = _b === void 0 ? 1 : _b,
    _c = _a.className,
    className = _c === void 0 ? '' : _c;
  return jsxRuntimeExports.jsx('span', {
    className: 'body'.concat(type, ' ').concat(className),
    children: children,
  });
};

var Display = function Display(_a) {
  var children = _a.children,
    className = _a.className;
  return jsxRuntimeExports.jsx('span', {
    className: 'display ' + className,
    children: children,
  });
};

var Heading = function Heading(_a) {
  var type = _a.type,
    children = _a.children,
    _b = _a.className,
    className = _b === void 0 ? '' : _b,
    onClick = _a.onClick;
  var headingClass = type;
  return /*#__PURE__*/ createElement(
    type,
    {
      className: ''.concat(headingClass, ' ').concat(className),
      onClick: onClick,
    },
    children,
  );
};

function _typeof(o) {
  '@babel/helpers - typeof';

  return (
    (_typeof =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (o) {
            return typeof o;
          }
        : function (o) {
            return o &&
              'function' == typeof Symbol &&
              o.constructor === Symbol &&
              o !== Symbol.prototype
              ? 'symbol'
              : typeof o;
          }),
    _typeof(o)
  );
}

function toPrimitive(t, r) {
  if ('object' != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || 'default');
    if ('object' != _typeof(i)) return i;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return ('string' === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, 'string');
  return 'symbol' == _typeof(i) ? i : i + '';
}

function _defineProperty(e, r, t) {
  return (
    (r = toPropertyKey(r)) in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[r] = t),
    e
  );
}

function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r &&
      (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (r) {
          _defineProperty(e, r, t[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
        : ownKeys(Object(t)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
          });
  }
  return e;
}
var FacebookIcon = function FacebookIcon(props) {
  return /*#__PURE__*/ jsxRuntimeExports.jsx(
    'svg',
    _objectSpread(
      _objectSpread({}, props),
      {},
      {
        children: /*#__PURE__*/ jsxRuntimeExports.jsx('path', {
          d: 'M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0 0 16 8Z',
        }),
      },
    ),
  );
};
FacebookIcon.defaultProps = {
  width: '16',
  height: '16',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
};
var InstagramIcon = function InstagramIcon(props) {
  return /*#__PURE__*/ jsxRuntimeExports.jsxs(
    'svg',
    _objectSpread(
      _objectSpread({}, props),
      {},
      {
        children: [
          /*#__PURE__*/ jsxRuntimeExports.jsxs('g', {
            clipPath: 'url(#a)',
            children: [
              /*#__PURE__*/ jsxRuntimeExports.jsx('path', {
                d: 'M8 1.44c2.137 0 2.39.01 3.231.048.781.034 1.203.165 1.485.274.372.144.64.32.918.597.282.282.454.547.597.92.11.28.24.705.275 1.484.038.843.047 1.096.047 3.23 0 2.138-.01 2.391-.047 3.232-.034.781-.165 1.203-.275 1.484-.143.372-.319.641-.597.92a2.46 2.46 0 0 1-.918.596c-.282.11-.707.24-1.485.275-.844.037-1.097.047-3.231.047-2.138 0-2.39-.01-3.231-.047-.782-.034-1.203-.166-1.485-.275a2.474 2.474 0 0 1-.918-.597 2.46 2.46 0 0 1-.597-.919c-.11-.28-.24-.706-.275-1.484-.038-.844-.047-1.097-.047-3.231 0-2.138.01-2.39.047-3.231.034-.782.165-1.204.275-1.485.144-.372.319-.64.597-.919a2.46 2.46 0 0 1 .918-.597c.282-.109.707-.24 1.485-.274C5.609 1.45 5.862 1.44 8 1.44ZM8 0C5.828 0 5.556.01 4.703.047c-.85.037-1.434.175-1.94.372a3.905 3.905 0 0 0-1.42.925A3.92 3.92 0 0 0 .42 2.759C.222 3.27.084 3.85.047 4.7.009 5.556 0 5.828 0 8c0 2.172.01 2.444.047 3.297.037.85.175 1.434.372 1.94.206.529.478.976.925 1.42.444.443.89.718 1.415.921.51.197 1.091.335 1.941.372.853.038 1.125.047 3.297.047s2.444-.01 3.297-.047c.85-.037 1.434-.175 1.94-.372a3.91 3.91 0 0 0 1.416-.922 3.91 3.91 0 0 0 .922-1.415c.197-.51.334-1.091.372-1.941.037-.853.047-1.125.047-3.297s-.01-2.444-.047-3.297c-.038-.85-.175-1.434-.372-1.94a3.748 3.748 0 0 0-.916-1.422 3.911 3.911 0 0 0-1.415-.922C12.73.225 12.15.088 11.3.05 10.444.01 10.172 0 8 0Z',
              }),
              /*#__PURE__*/ jsxRuntimeExports.jsx('path', {
                d: 'M8 3.89a4.11 4.11 0 0 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.776a2.666 2.666 0 1 1 0-5.332 2.666 2.666 0 0 1 0 5.332ZM13.231 3.728a.96.96 0 1 1-1.919 0 .96.96 0 0 1 1.92 0Z',
              }),
            ],
          }),
          /*#__PURE__*/ jsxRuntimeExports.jsx('defs', {
            children: /*#__PURE__*/ jsxRuntimeExports.jsx('clipPath', {
              id: 'a',
              children: /*#__PURE__*/ jsxRuntimeExports.jsx('path', {
                fill: '#fff',
                d: 'M0 0h16v16H0z',
              }),
            }),
          }),
        ],
      },
    ),
  );
};
InstagramIcon.defaultProps = {
  width: '16',
  height: '16',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
};
var LinkedinIcon = function LinkedinIcon(props) {
  return /*#__PURE__*/ jsxRuntimeExports.jsxs(
    'svg',
    _objectSpread(
      _objectSpread({}, props),
      {},
      {
        children: [
          /*#__PURE__*/ jsxRuntimeExports.jsx('g', {
            clipPath: 'url(#a)',
            children: /*#__PURE__*/ jsxRuntimeExports.jsx('path', {
              d: 'M14.816 0H1.18C.528 0 0 .516 0 1.153v13.69A1.17 1.17 0 0 0 1.181 16h13.635c.653 0 1.184-.519 1.184-1.153V1.153C16 .516 15.469 0 14.816 0ZM4.746 13.634H2.373V5.997h2.375v7.637ZM3.56 4.956a1.376 1.376 0 1 1-.004-2.751 1.376 1.376 0 0 1 .004 2.751Zm10.075 8.678h-2.372V9.922c0-.885-.015-2.025-1.234-2.025-1.234 0-1.422.966-1.422 1.962v3.775H6.237V5.997h2.275V7.04h.032c.315-.6 1.09-1.235 2.243-1.235 2.404 0 2.847 1.582 2.847 3.638v4.19Z',
            }),
          }),
          /*#__PURE__*/ jsxRuntimeExports.jsx('defs', {
            children: /*#__PURE__*/ jsxRuntimeExports.jsx('clipPath', {
              id: 'a',
              children: /*#__PURE__*/ jsxRuntimeExports.jsx('path', {
                fill: '#fff',
                d: 'M0 0h16v16H0z',
              }),
            }),
          }),
        ],
      },
    ),
  );
};
LinkedinIcon.defaultProps = {
  width: '16',
  height: '16',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
};
var TwitterIcon = function TwitterIcon(props) {
  return /*#__PURE__*/ jsxRuntimeExports.jsx(
    'svg',
    _objectSpread(
      _objectSpread({}, props),
      {},
      {
        children: /*#__PURE__*/ jsxRuntimeExports.jsx('path', {
          d: 'M5.033 15.407c6.037 0 9.34-5.315 9.34-9.923 0-.15-.004-.302-.01-.451A6.913 6.913 0 0 0 16 3.227a6.177 6.177 0 0 1-1.884.548 3.477 3.477 0 0 0 1.443-1.929 6.369 6.369 0 0 1-2.083.847 3.232 3.232 0 0 0-1.863-1.053 3.12 3.12 0 0 0-2.081.367 3.416 3.416 0 0 0-1.443 1.635 3.693 3.693 0 0 0-.21 2.23 8.897 8.897 0 0 1-3.746-1.056A9.453 9.453 0 0 1 1.115 2.23a3.682 3.682 0 0 0-.358 2.54A3.5 3.5 0 0 0 2.13 6.887 3.14 3.14 0 0 1 .644 6.45v.043c0 .805.261 1.586.742 2.21a3.253 3.253 0 0 0 1.891 1.21c-.482.14-.989.16-1.48.06.21.692.617 1.298 1.167 1.733.55.434 1.213.676 1.898.69a6.34 6.34 0 0 1-4.078 1.494 6.2 6.2 0 0 1-.784-.05 8.918 8.918 0 0 0 5.033 1.566Z',
        }),
      },
    ),
  );
};
TwitterIcon.defaultProps = {
  width: '16',
  height: '17',
  fill: 'currentColor',
  xmlns: 'http://www.w3.org/2000/svg',
};
var icons$1 = {
  Facebook: FacebookIcon,
  Instagram: InstagramIcon,
  Linkedin: LinkedinIcon,
  Twitter: TwitterIcon,
};

var Icon = function Icon(_a) {
  var name = _a.name;
  _a.size;
  var _c = _a.fill,
    fill = _c === void 0 ? 'currentColor' : _c,
    link = _a.link;
  var IconComponent = icons$1[name];
  if (!IconComponent) {
    console.error('Icon "'.concat(name, '" not found in icons object'));
    return null;
  }
  return jsxRuntimeExports.jsx('a', {
    className: 'iconLink',
    href: link,
    target: '_blank',
    rel: 'noopener noreferrer',
    children: jsxRuntimeExports.jsx(IconComponent, {
      fill: fill,
    }),
  });
};

var icons = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com',
  },
  {
    name: 'Twitter',
    url: 'https://www.twitter.com',
  },
];

var Footer = function Footer(_a) {
  var title = _a.title,
    links = _a.links,
    mainText = _a.mainText,
    error = _a.error,
    btnLabel = _a.btnLabel,
    btnClick = _a.btnClick,
    email = _a.email,
    address = _a.address,
    placeholder = _a.placeholder,
    value = _a.value,
    onChange = _a.onChange;
  return jsxRuntimeExports.jsxs('div', {
    className: 'footer-wrapper',
    children: [
      jsxRuntimeExports.jsxs('div', {
        className: 'footer-header',
        children: [
          jsxRuntimeExports.jsx(Heading, {
            className: 'title',
            type: 'h4',
            children: title,
          }),
          jsxRuntimeExports.jsx('div', {
            className: 'links',
            children: Object.entries(links).map(function (_a) {
              var title = _a[0],
                url = _a[1];
              return jsxRuntimeExports.jsx(
                'a',
                {
                  className: 'link-item',
                  href: url,
                  children: title,
                },
                url,
              );
            }),
          }),
        ],
      }),
      jsxRuntimeExports.jsxs('div', {
        className: 'footer-main',
        children: [
          jsxRuntimeExports.jsx(Heading, {
            className: 'footer-main-text',
            type: 'h2',
            children: mainText,
          }),
          jsxRuntimeExports.jsxs('div', {
            className: 'email-block',
            children: [
              jsxRuntimeExports.jsxs('div', {
                className: 'email-block-main',
                children: [
                  jsxRuntimeExports.jsx('input', {
                    value: value,
                    onChange: onChange,
                    className: 'footer-input',
                    type: 'email',
                    placeholder: placeholder,
                  }),
                  jsxRuntimeExports.jsx('span', {
                    className: 'error',
                    children: error,
                  }),
                ],
              }),
              jsxRuntimeExports.jsx(Button, {
                title: btnLabel,
                label: btnLabel,
                onClick: btnClick,
              }),
            ],
          }),
        ],
      }),
      jsxRuntimeExports.jsxs('div', {
        className: 'footer-footer',
        children: [
          jsxRuntimeExports.jsxs('div', {
            className: 'contact',
            children: [
              jsxRuntimeExports.jsx(Body, {
                type: 1,
                children: address,
              }),
              jsxRuntimeExports.jsx(Body, {
                type: 1,
                children: email,
              }),
            ],
          }),
          jsxRuntimeExports.jsx('div', {
            className: 'icons',
            children: icons.map(function (icon) {
              return jsxRuntimeExports.jsx(
                Icon,
                {
                  name: icon.name,
                  link: icon.url,
                },
                icon.name,
              );
            }),
          }),
        ],
      }),
    ],
  });
};

var useBodyScrollLock = function useBodyScrollLock(isOpen) {
  useEffect(
    function () {
      if (isOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return function () {
        document.body.style.overflow = '';
      };
    },
    [isOpen],
  );
};

var Header = function Header(_a) {
  var title = _a.title,
    links = _a.links,
    btnLabel = _a.btnLabel,
    btnClick = _a.btnClick,
    logoClick = _a.logoClick,
    languages = _a.languages,
    selectedLanguage = _a.selectedLanguage,
    onLanguageChange = _a.onLanguageChange;
  var _b = useState(false),
    isMenuOpen = _b[0],
    setIsMenuOpen = _b[1];
  useBodyScrollLock(isMenuOpen);
  var toggleMenu = function toggleMenu() {
    setIsMenuOpen(function (prev) {
      return !prev;
    });
  };
  var btnMenuClick = function btnMenuClick() {
    setIsMenuOpen(false);
    btnClick();
  };
  return jsxRuntimeExports.jsxs('div', {
    className: 'header-wrapper',
    children: [
      jsxRuntimeExports.jsx(Heading, {
        onClick: logoClick,
        className: 'title',
        type: 'h4',
        children: title,
      }),
      jsxRuntimeExports.jsxs('div', {
        className: 'links',
        children: [
          Object.entries(links).map(function (_a) {
            var linkTitle = _a[0],
              url = _a[1];
            return jsxRuntimeExports.jsx(
              'a',
              {
                className: 'link-item',
                href: url,
                children: linkTitle,
              },
              url,
            );
          }),
          jsxRuntimeExports.jsx(Button, {
            title: btnLabel,
            variant: 'secondary',
            label: btnLabel,
            onClick: btnClick,
          }),
          jsxRuntimeExports.jsx('div', {
            className: 'language-selector',
            children: jsxRuntimeExports.jsx('select', {
              value: selectedLanguage,
              onChange: function onChange(e) {
                return onLanguageChange(e.target.value);
              },
              children: languages.map(function (lang) {
                return jsxRuntimeExports.jsx(
                  'option',
                  {
                    value: lang,
                    children: lang,
                  },
                  lang,
                );
              }),
            }),
          }),
        ],
      }),
      jsxRuntimeExports.jsxs('div', {
        className: 'burger-menu '.concat(isMenuOpen ? 'open' : ''),
        onClick: toggleMenu,
        children: [
          jsxRuntimeExports.jsx('span', {
            className: 'burger-line',
          }),
          jsxRuntimeExports.jsx('span', {
            className: 'burger-line',
          }),
          jsxRuntimeExports.jsx('span', {
            className: 'burger-line',
          }),
        ],
      }),
      jsxRuntimeExports.jsx('div', {
        className: 'fullscreen-menu '.concat(isMenuOpen ? 'open' : ''),
        children: jsxRuntimeExports.jsxs('div', {
          className: 'menu-content',
          children: [
            Object.entries(links).map(function (_a) {
              var linkTitle = _a[0],
                url = _a[1];
              return jsxRuntimeExports.jsx(
                'a',
                {
                  className: 'link-item',
                  href: url,
                  onClick: toggleMenu,
                  children: linkTitle,
                },
                url,
              );
            }),
            jsxRuntimeExports.jsx('div', {
              className: 'language-selector',
              children: jsxRuntimeExports.jsx('select', {
                value: selectedLanguage,
                onChange: function onChange(e) {
                  return onLanguageChange(e.target.value);
                },
                children: languages.map(function (lang) {
                  return jsxRuntimeExports.jsx(
                    'option',
                    {
                      value: lang,
                      children: lang,
                    },
                    lang,
                  );
                }),
              }),
            }),
            jsxRuntimeExports.jsx(Button, {
              title: btnLabel,
              variant: 'secondary',
              label: btnLabel,
              onClick: btnMenuClick,
            }),
          ],
        }),
      }),
    ],
  });
};

var Input = function Input(_a) {
  var placeholder = _a.placeholder,
    _b = _a.type,
    type = _b === void 0 ? 'text' : _b,
    value = _a.value,
    onChange = _a.onChange,
    error = _a.error;
  return jsxRuntimeExports.jsxs('div', {
    className: 'input-wrapper',
    children: [
      jsxRuntimeExports.jsx('input', {
        className: 'input',
        type: type,
        placeholder: placeholder,
        value: value,
        onChange: onChange,
      }),
      jsxRuntimeExports.jsx('span', {
        className: 'error',
        children: error,
      }),
    ],
  });
};

var Label = function Label(_a) {
  var children = _a.children;
  return jsxRuntimeExports.jsx('span', {
    className: 'label',
    children: children,
  });
};

var Cap = function Cap(_a) {
  var children = _a.children,
    _b = _a.type,
    type = _b === void 0 ? 1 : _b,
    _c = _a.className,
    className = _c === void 0 ? '' : _c;
  return jsxRuntimeExports.jsx('span', {
    className: 'cap'.concat(type, ' ').concat(className),
    children: children.toUpperCase(),
  });
};

var Category = function Category(_a) {
  var icon = _a.icon,
    title = _a.title,
    text = _a.text,
    _b = _a.type,
    type = _b === void 0 ? 'primary' : _b,
    onClick = _a.onClick,
    className = _a.className;
  return jsxRuntimeExports.jsxs('div', {
    className: type + 'Category ' + className,
    onClick: onClick,
    children: [
      jsxRuntimeExports.jsx('div', {
        className: 'categoryIcon',
        children: /*#__PURE__*/ isValidElement(icon)
          ? icon
          : jsxRuntimeExports.jsx('img', {
              src: icon,
              alt: '',
            }),
      }),
      jsxRuntimeExports.jsx(Heading, {
        type: 'h3',
        children: title,
      }),
      text &&
        jsxRuntimeExports.jsx(Body, {
          className: 'categoryText',
          children: text,
        }),
    ],
  });
};

var Tag = function Tag(_a) {
  var children = _a.children,
    onChange = _a.onChange,
    checked = _a.checked;
  var handleChange = function handleChange(e) {
    onChange(e.target.checked);
  };
  return jsxRuntimeExports.jsxs('label', {
    className: 'tag '.concat(checked ? 'checked' : ''),
    children: [
      jsxRuntimeExports.jsx('input', {
        type: 'checkbox',
        className: 'tag-checkbox',
        onChange: handleChange,
        checked: checked,
      }),
      jsxRuntimeExports.jsx('span', {
        className: 'tag-content',
        children: children,
      }),
    ],
  });
};

var MessageBox = function MessageBox(_a) {
  var placeholder = _a.placeholder,
    value = _a.value,
    onChange = _a.onChange,
    error = _a.error;
  return jsxRuntimeExports.jsxs('div', {
    className: 'message-box-wrapper',
    children: [
      jsxRuntimeExports.jsx('textarea', {
        className: 'message-box',
        placeholder: placeholder,
        value: value,
        onChange: onChange,
      }),
      jsxRuntimeExports.jsx('span', {
        className: 'error',
        children: error,
      }),
    ],
  });
};

var Select = function Select(_a) {
  var options = _a.options,
    _b = _a.placeholder,
    placeholder = _b === void 0 ? 'Select an option' : _b,
    selectedOption = _a.selectedOption,
    setSelectedOption = _a.setSelectedOption,
    error = _a.error;
  var _c = useState(false),
    isOpen = _c[0],
    setIsOpen = _c[1];
  var handleToggle = function handleToggle() {
    return setIsOpen(!isOpen);
  };
  var handleOptionClick = function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return jsxRuntimeExports.jsxs('div', {
    children: [
      jsxRuntimeExports.jsxs('div', {
        className: 'custom-selector',
        children: [
          jsxRuntimeExports.jsxs('div', {
            className: 'custom-selector-header '.concat(isOpen ? 'open' : ''),
            onClick: handleToggle,
            children: [
              jsxRuntimeExports.jsx('span', {
                children:
                  (selectedOption === null || selectedOption === void 0
                    ? void 0
                    : selectedOption.label) || placeholder,
              }),
              jsxRuntimeExports.jsx('div', {
                className: 'arrow '.concat(isOpen ? 'rotate' : ''),
              }),
            ],
          }),
          isOpen &&
            jsxRuntimeExports.jsx('ul', {
              className: 'custom-selector-options',
              children: options.map(function (option) {
                return jsxRuntimeExports.jsx(
                  'li',
                  {
                    className: 'custom-selector-option',
                    onClick: function onClick() {
                      return handleOptionClick(option);
                    },
                    children: option.label,
                  },
                  option.value,
                );
              }),
            }),
        ],
      }),
      jsxRuntimeExports.jsx('span', {
        className: 'error',
        children: error,
      }),
    ],
  });
};

export {
  Body,
  Button,
  Cap,
  Category,
  Display,
  Footer,
  Header,
  Heading,
  Icon,
  Input,
  Label,
  MessageBox,
  Select,
  Tag,
};
//# sourceMappingURL=index.esm.js.map
