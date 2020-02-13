import { objectToXml } from '../xml/creator.js'

export { createQuantelClipNcsItem as createNcsItemForQuantelClip }

/**
 *
 * @param {object} clipData = the clip data to create the ncsItem from
 * @param {string} clipData.title - clip title
 * @param {string} clipData.guid - clip guid
 * @param {string} clipData.clipFrameCount - clip length in frames
 *
 * @returns {XMLDocument} - a MOS ncsItem document
 */
function createQuantelClipNcsItem({ title, guid, clipFrameCount }) {
	return objectToXml(
		{
			ncsItem: {
				item: {
					itemID: 2,
					itemSlug: title,
					objID: guid,
					mosID: 'quantelplugin.sofie',
					mosPlugInID: 'Sofie.QuantelPlugin',
					mosAbstract: {},
					objPaths: {
						objPath: {
							['@techDescription']: 'Quantel clip',
							['#textContent']: guid
						}
					},
					itemEdDur: clipFrameCount,
					mosExternalMetadata: {}
				}
			}
		},
		'mos'
	)
}
