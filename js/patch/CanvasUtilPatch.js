// FIXME: temp patch for react canvas position scale and rotate images
import CanvasUtil from 'react-canvas/lib/CanvasUtils'

var _drawImage = CanvasUtil.drawImage
CanvasUtil.drawImage = function(ctx, image, x, y, width, height, options) {
    options = options || {};
    // rotation patch
    if (image.rotate) {
        ctx.save();
        // move to image center
        ctx.translate(x / 2 + width / 2, y / 2 + height / 2);
        ctx.rotate(image.rotate * Math.PI / 180)
        // draw image without CanvasUtil.drawImage
        ctx.drawImage(image.getRawImage(), -width / 2, -height / 2, width, height)
        ctx.restore();
    }else{
        _drawImage(ctx, image, x / 2, y / 2, width, height, options)
    }
}

export default CanvasUtil
