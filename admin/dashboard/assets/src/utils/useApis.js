import apiFetch from '@wordpress/api-fetch';

/**
 * Edit font to DB.
 * @param {object} dispatch
 * @param {string} fontId
 * @param {object} googleFontData
 * @return {void}
 */
export const editFontToDB = (dispatch, fontId, googleFontData) => {
    //setAddingFont( 'loading' );
    const formData = new window.FormData();
    formData.append( 'action', 'bcf_edit_font' );
    formData.append( 'security', bsf_custom_fonts_admin.edit_font_nonce );
    formData.append( 'font_type', 'google' );
    formData.append( 'font_id', fontId );
    formData.append( 'font_data', JSON.stringify( googleFontData ) );

    apiFetch( {
        url: bsf_custom_fonts_admin.ajax_url,
        method: 'POST',
        body: formData,
    } ).then( (response) => {
        if ( response.success ) {
                //dispatch that banner
                dispatch( { type: 'IS_DB_UPDATE_REQUIRED', isDbUpdateRequired: false } );
        }
    } );
}

/**
 * Delete font to DB.
 * @param {object} dispatch
 * @param {string} fontId
 * @return {void}
 */
export const deleteFontFromDB = (dispatch, fontId) => {
    const formData = new window.FormData();

    formData.append( 'action', 'bcf_delete_font' );
    formData.append( 'security', bsf_custom_fonts_admin.delete_font_nonce );
    formData.append( 'font_id', fontId );

    apiFetch( {
        url: bsf_custom_fonts_admin.ajax_url,
        method: 'POST',
        body: formData,
    } ).then( (response) => {
        if ( response.success ) {
            dispatch( { type: 'IS_DB_UPDATE_REQUIRED', isDbUpdateRequired: false } );
        }
    } );
}

/**
 * Add font to DB.
 * @param {object} dispatch
 * @param {function} cb
 * @param {object} googleFontData
 * @return {void}
 */
export const addFontToDB = ( dispatch, googleFontData, cb ) => {
    const formData = new window.FormData();
    formData.append( 'action', 'bcf_add_new_google_font' );
    formData.append( 'security', bsf_custom_fonts_admin.add_font_nonce );
    formData.append( 'font_type', 'google' );
    formData.append( 'font_data', JSON.stringify( googleFontData ) );

    apiFetch( {
        url: bsf_custom_fonts_admin.ajax_url,
        method: 'POST',
        body: formData,
    } ).then( (response) => {
        if ( response.success ) {
            dispatch( { type: 'IS_DB_UPDATE_REQUIRED', isDbUpdateRequired: false } );
            cb(response.data.fontId);
        }
    } );
};
