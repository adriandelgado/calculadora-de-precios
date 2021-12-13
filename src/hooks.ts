import type { Handle } from "@sveltejs/kit";
import { minify } from "html-minifier";
import { prerendering } from "$app/env";

const minification_options = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  decodeEntities: true,
  html5: true,
  ignoreCustomComments: [/^#/],
  minifyCSS: true,
  minifyJS: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortAttributes: true,
  sortClassName: true,
  removeEmptyElements: true,
};

export const handle: Handle = async ({ request, resolve }) => {
  const response = await resolve(request);

  if (prerendering && response.headers["content-type"] === "text/html") {
    response.body = minify(response.body as string, minification_options);
  }

  return response; //Finally, we return back the response
};
