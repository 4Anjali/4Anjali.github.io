'use strict';

function NewFlag(props) {
    const svg = {
        1: '<svg style="height: 100%" version="1.1" viewBox="0.0 0.0 960.0 960.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><path class="svg-fill--foreground" d="m8.834645 479.25986l129.62831 -91.31625l-66.60328 -143.89636l157.91953 -14.268036l14.268036 -157.91953l143.89636 66.60328l91.31625 -129.62831l91.31625 129.62831l143.8963 -66.60328l14.268066 157.91953l157.91956 14.268036l-66.60333 143.89636l129.62836 91.31625l-129.62836 91.31625l66.60333 143.8963l-157.91956 14.268066l-14.268066 157.91956l-143.8963 -66.60333l-91.31625 129.62836l-91.31625 -129.62836l-143.89636 66.60333l-14.268036 -157.91956l-157.91953 -14.268066l66.60328 -143.8963z" fill-rule="evenodd"/><path class="svg-stroke--foreground" stroke-width="1.0" stroke-linejoin="round" stroke-linecap="butt" d="m8.834645 479.25986l129.62831 -91.31625l-66.60328 -143.89636l157.91953 -14.268036l14.268036 -157.91953l143.89636 66.60328l91.31625 -129.62831l91.31625 129.62831l143.8963 -66.60328l14.268066 157.91953l157.91956 14.268036l-66.60333 143.89636l129.62836 91.31625l-129.62836 91.31625l66.60333 143.8963l-157.91956 14.268066l-14.268066 157.91956l-143.8963 -66.60333l-91.31625 129.62836l-91.31625 -129.62836l-143.89636 66.60333l-14.268036 -157.91956l-157.91953 -14.268066l66.60328 -143.8963z" fill-rule="evenodd"/><path class="svg-fill--background" d="m165.43556 622.66003l0 -320.76562l49.890625 0l65.73436 154.45312l0 -154.45312l58.609375 0l0 320.76562l-47.921875 0l-65.73436 -166.3125l0 166.3125l-60.578125 0zm222.15593 0l0 -320.76562l144.14069 0l0 48.3125l-73.265686 0l0 79.59375l55.84381 0l0 49.109375l-55.84381 0l0 95.828125l74.06256 0l0 47.921875l-144.93756 0zm202.7464 0l-38.8125 -320.76562l60.203125 0l19.0 186.92188l24.15625 -186.51562l47.125 0l25.34375 185.32812l19.40625 -185.73438l59.390625 0l-38.40625 320.76562l-61.78125 0l-27.3125 -193.64062l-25.75 193.64062l-62.5625 0z" fill-rule="nonzero"/></g></svg>',
        
        2: '<svg style="height: 100%" version="1.1" viewBox="0.0 0.0 1920.0 720.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><g><path class="svg-fill--foreground" d="m12.519685 708.53546l547.95624 0c32.704956 0 59.21753 -13.004028 59.21753 -29.045227c0 -16.041199 -26.512573 -29.045227 -59.21753 -29.045227l-118.43503 0c-32.704926 0 -59.2175 -13.003967 -59.2175 -29.045166c0 -16.04126 26.512573 -29.045227 59.2175 -29.045227l1035.9182 0c32.704834 0 59.21753 13.003967 59.21753 29.045227c0 16.041199 -26.512695 29.045166 -59.21753 29.045166l-118.43506 0c-32.704956 0 -59.21753 13.004028 -59.21753 29.045227c0 16.041199 26.512573 29.045227 59.21753 29.045227l547.9563 0l-236.87012 -290.44507l236.87012 -290.445l-370.3037 0l0 -87.135605l0 0c0 -16.04122 -26.512695 -29.045198 -59.21753 -29.045198l-1035.9182 0c-32.704926 0 -59.2175 13.003979 -59.2175 29.045198l0 87.135605l-370.30374 0l236.87009 290.445z" fill-rule="evenodd"/><path class="svg-fill--foreground" d="m619.6935 679.49023c0 -16.041199 -26.512573 -29.045227 -59.21753 -29.045227l-118.43503 0c-32.704926 0 -59.2175 -13.003967 -59.2175 -29.045166c0 -16.04126 26.512573 -29.045227 59.2175 -29.045227l177.65256 0zm680.61304 0c0 -16.041199 26.512573 -29.045227 59.21753 -29.045227l118.43506 0c32.704834 0 59.21753 -13.003967 59.21753 -29.045166c0 -16.04126 -26.512695 -29.045227 -59.21753 -29.045227l-177.65259 0z" fill-rule="evenodd"/><path class="svg-stroke--background" stroke-width="24.0" stroke-linejoin="round" stroke-linecap="butt" d="m12.519685 708.53546l236.87009 -290.44507l-236.87009 -290.445l370.30374 0l0 -87.135605l0 0c0 -16.04122 26.512573 -29.045198 59.2175 -29.045198l1035.9182 0c32.704834 0 59.21753 13.003979 59.21753 29.045198l0 87.135605l0 0l370.3037 0l-236.87012 290.445l236.87012 290.44507l-547.9563 0c-32.704956 0 -59.21753 -13.004028 -59.21753 -29.045227c0 -16.041199 26.512573 -29.045227 59.21753 -29.045227l118.43506 0c32.704834 0 59.21753 -13.003967 59.21753 -29.045166c0 -16.04126 -26.512695 -29.045227 -59.21753 -29.045227l-1035.9182 0c-32.704926 0 -59.2175 13.003967 -59.2175 29.045227c0 16.041199 26.512573 29.045166 59.2175 29.045166l118.43503 0c32.704956 0 59.21753 13.004028 59.21753 29.045227c0 16.041199 -26.512573 29.045227 -59.21753 29.045227zm607.17377 -116.18085l0 87.13562m680.61304 0l0 -87.13562m-917.4831 29.045227l0 -493.75446m1154.3533 0l0 493.75446" fill-rule="evenodd"/><path class="svg-fill--background" d="m526.18823 522.13385l0 -432.0l67.203125 0l88.53125 208.0l0 -208.0l78.921875 0l0 432.0l-64.53125 0l-88.53125 -224.0l0 224.0l-81.59375 0zm299.19702 0l0 -432.0l194.125 0l0 65.06251l-98.65625 0l0 107.203125l75.203125 0l0 66.140625l-75.203125 0l0 129.0625l99.734375 0l0 64.53125l-195.20312 0zm273.06946 0l-52.265625 -432.0l81.0625 0l25.59375 251.73438l32.53125 -251.20312l63.46875 0l34.140625 249.60938l26.125 -250.14062l80.0 0l-51.734375 432.0l-83.203125 0l-36.796875 -260.79688l-34.65625 260.79688l-84.265625 0z" fill-rule="nonzero"/></g></svg>'
    };

    const style = props.style || {};

    style.verticalAlign = props.type === 2 ? 'text-top' : 'inherit';
    
    return e('span', {
        className: 'inline-block ' + (props.className || ''),
        style: style,
        dangerouslySetInnerHTML: {__html: svg[props.type || 1]}
    });
}

function TwentyOhEightIcon(props) {
    // const svgOld = '<svg style="height: 100%" version="1.1" viewBox="0.0 0.0 512.0 512.0" fill="none" stroke="none" stroke-linecap="square" stroke-miterlimit="10" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"><clipPath id="p.0"><path d="m0 0l512.0 0l0 512.0l-512.0 0l0 -512.0z" clip-rule="nonzero"/></clipPath><g clip-path="url(#p.0)"><path fill="#000000" fill-opacity="0.0" d="m0 0l512.0 0l0 512.0l-512.0 0z" fill-rule="evenodd"/><path fill="#000000" fill-opacity="0.0" d="m24.0 159.90096l135.90096 -135.90096l192.19807 0l135.90097 135.90096l0 192.19807l-135.90097 135.90097l-192.19807 0l-135.90096 -135.90097z" fill-rule="evenodd"/><path class="svg-stroke--foreground" stroke-width="24.0" stroke-linejoin="round" stroke-linecap="butt" d="m24.0 159.90096l135.90096 -135.90096l192.19807 0l135.90097 135.90096l0 192.19807l-135.90097 135.90097l-192.19807 0l-135.90096 -135.90097z" fill-rule="evenodd"/><path fill="#000000" fill-opacity="0.0" d="m50.188976 170.74896l120.55998 -120.55998l170.50208 0l120.56 120.55998l0 170.50208l-120.56 120.56l-170.50208 0l-120.55998 -120.56z" fill-rule="evenodd"/><path class="svg-stroke--background" stroke-width="24.0" stroke-linejoin="round" stroke-linecap="butt" d="m50.188976 170.74896l120.55998 -120.55998l170.50208 0l120.56 120.55998l0 170.50208l-120.56 120.56l-170.50208 0l-120.55998 -120.56z" fill-rule="evenodd"/></g></svg>';
    const svg = '<svg style="height: 100%" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M64 448V128H128V160H160V192H192V223.5H256V192H288V160H319.5V128H383.5V448H319.5V256H288V287.5H256V319.5H192V287.5H160V256H128V448H64Z" class="svg-fill--background"/><path fill-rule="evenodd" clip-rule="evenodd" d="M64 32V64H32H0V288V512H96H192V480V448H224H256V480V512H352H448V480V448H480H512V224V0H416H320V16V32H288H256V16V0H160H64V32ZM128 144V160H144H160V176V192H176H192V208V224H224H256V208V192H272H288V176V160H304H320V144V128H352H384V288V448H352H320V352V256H304H288V272V288H272H256V304V320H224H192V304V288H176H160V272V256H144H128V352V448H96H64V288V128H96H128V144Z" class="svg-fill--foreground"/></svg>';
    
    return e('span', {
        className: 'inline-block',
        style: props.style,
        dangerouslySetInnerHTML: {__html: svg}
    });
}
