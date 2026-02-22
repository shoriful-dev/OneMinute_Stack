import scalekit from '@/lib/scalekit';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const code = searchParams.get('code');
  const error = searchParams.get('error');
  const error_description = searchParams.get('error_description');

  if (error) {
    return NextResponse.json({ error, error_description }, { status: 401 });
  }
  if (!code) {
    return NextResponse.json({ error: 'No code provided' }, { status: 400 });
  }

  try {
    const redirectUri = process.env.SCALEKIT_REDIRECT_URI!;

    const authResult = await scalekit.authenticateWithCode(code, redirectUri);
    const { user, idToken } = authResult;

    const claims = await scalekit.validateToken(idToken);

    const organizationId =
      (claims as any).organization_id ||
      (claims as any).org_id ||
      (claims as any).oid ||
      null;

    if (!organizationId) {
      return NextResponse.json(
        { error: 'Organization ID not found in token claims' },
        { status: 500 },
      );
    }
  } catch (error) {}
}
