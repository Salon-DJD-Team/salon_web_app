import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const config = (window as any).config;
  if (config && config.contentApiKey) {
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${config.contentApiKey}`,
      },
    });
    return next(clonedReq);
  }
  return next(req);
};
